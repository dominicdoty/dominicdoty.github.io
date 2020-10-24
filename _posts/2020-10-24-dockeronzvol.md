---
title: Docker on ZFS without ZFS
layout: post
image: /images/computerstuff/cover.JPG
tags: computerstuff
published: true
---

I recently switched my server to zfs on root (still haven't decided if it was really worth it but that's another post). I quickly found that the [Docker zfs storage driver](https://docs.docker.com/storage/storagedriver/zfs-driver/) seems to suck a lot.

<!-- more -->

My key issue with the driver is that it seems to break very frequently (3-4 serious issues in the ~3 months I ran it), leaving orphaned datasets and refusing to restart containers when there's cruft all over. The issues also don't have a clear solution (at least to me) and I frequently end up wiping out the docker installation and restarting from scratch. Additionally it creates a whole mess of datasets, which combined with Ubuntu settings for automatic zfs snapshots leaves a lot of cruft.

*Here's where I should say - the storage driver is clearly marked as experimental and not for production - so these problems are totally reasonable. I knew this and chose to try it anyways.*

I finally gave up and decided to move my Docker storage to a zvol, which is a zfs dataset that emulates a block device. This is actually the best of both worlds because you still have the ability to use zfs transparent compression, snapshots, copy on write, etc. but without dealing with the Docker zfs storage driver. Here's the basic strokes of how I did it.

### Assumptions
These don't have to be true for you, but if they are not- don't directly copy and paste these commands without updating them.
 * zfs pool is named `tank`
 * you're putting Docker at `/var/lib/docker`

### Instructions
1. Uninstall docker if its still installed, and delete contents of `/var/lib/docker` (or move them to a backup location).
2. Make a zvol (change the size if you like):  
   `zfs create -V 30gb tank/docker`
3. Partition the volume:  
   `fdisk /dev/zd0`
    * You'll have to follow through the prompts to create a partition that takes up the whole zvol. Leaving it linux type should be fine. Sequence is `n enter enter enter w`.
4. Create filesystem:  
   `mkfs.ext4 /dev/zd0p1`
5. Enable zfs compression (optional):
   `zfs set compression=lzjb tank/docker`
6. Make the mount directory:  
   `mkdir -p /var/lib/docker`
7. Update fstab:  
   `printf "UUID=%s /var/lib/docker auto nodev,nofail 0 0" $(blkid | grep -oP "zd0p1: UUID=\K\"\S+\"") >> /etc/fstab`
8. Check fstab:  
   `mount -a`
9.  Make sure you don't have a config file from an old zfs docker installation at `/etc/docker/daemon.json`. Delete the storage driver setting if you do.
10. [Install docker](https://docs.docker.com/engine/install/debian/)
11. Do your docker stuff without dealing with 100s of random datasets and snapshots and constant failures of the zfs storage-driver.