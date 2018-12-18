---
title: New Motion Control
layout: post
image: /images/laser/beagle.JPG
tags: laser
published: true
---

The Smoothie is dead, long live the... whatever comes next. Some crappy wire fried my control board so now I've got to get a new solution.

<!-- more -->

I went over the primary disadvantage of the Smoothie in the last post, which is that it can't support two motors driving the same axis. This isn't generally a problem for most people, but it is for the design that I came up with.
I searched around a lot to try and find a better solution. Some of the things I looked at were:

* [Klipper](https://github.com/KevinOConnor/klipper) is what I use on my 3d printer but no laser support currently
* [TinyG](https://synthetos.myshopify.com/products/tinyg) seems really nice but no support for double motor gantry
* [GRBL](https://github.com/grbl/grbl) looks more complicated to setup (looking to flash to Smoothie) and no double motor support
* [LinuxCNC](http://linuxcnc.org/) looks difficult to set up, but supports dual motor gantry. Requires an old PC with parallel port theoretically
* [MachineKit](http://www.machinekit.io/) is a branch of LinuxCNC, seems to be mostly run on BeagleBone Blacks with a "cape" that adds supporting circuitry for interfacing with the machine. Similar configuration to LinuxCNC

I ended up selecting MachineKit on a BBB with a [Xylotex 6 Pack](http://xylotex.netfirms.com/OSCommerce/catalog/product_info.php?products_id=134) as the supporting cape. I chose this as its the only option that supports dual motors on a gantry, and it also doesn't require an old parallel port PC or expensive hardware like LinuxCNC seems to require.
I chose the Xylotex out of several [options](http://blog.machinekit.io/p/hardware-capes.html). Most of the other capes seem to be aimed at a more powerful system where you'd have stand alone stepper drivers and just need to wire them to the control board. They mostly just provide isolated/protected outputs from the BBB. The Xylotex board is similar to RAMPS, in that it provides up to 6 stepper drivers using the ubiquitous RepRap style stepper driver pinout, in addition to a handful of isolated inputs and outputs, and some extra connectors for an E-Stop and power switch. I've still got to figure out how to wire this all up to the relays and stuff I have, but it seems like it should be able to do everything I want.
So far MachineKit seems complex to setup, but I think this is mostly due to lackluster documentation. There seems to be a good amount of documentation, but it isn't set up in a way that's intuitive to follow. Luckily, I think this has much more configuration options when compared to most 3D printer controllers as far as input and output control, and user configurable logic. It will just take a while to get there.
I'll try my best to write up a little how to when I'm done to try and make it easier for others in the future.