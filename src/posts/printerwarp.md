---
title: Mini Kossel - Motor Overheating
layout: post
image: /images/3dprinter/cover.jpg
date: 2013-11-12
tags: [3dprinter]
published: true
---

I ran my Mini Kossel on a marathon print for 16 hours and found out after that my motors can run a little hot when they warped their plastic mounts.

<!--more-->

Here is a photo of it. It might be difficult to see, but the wall softened and the tension on the belts torqued the motor enough to warp the plastic.

![3d Printer](/images/3dprinter/warped.jpg)

The motors get hot from high current, so the first thing I did was drop the motor driver currents down. This didn't lead to any skipped steps and keeps it running cooler. I really wanted to stomp this issue out while I had the printer apart though, so I printed up these motor cooling fans. They're wired up to the controller board to automatically turn on when the motors are running, keeping them cool and my plastic un-warped.

![3d Printer](/images/3dprinter/motorfan.jpg)

Again while I had the printer apart, it was time to make some changes. The electronics were originally mounted on top of the tower. This proved a little ugly for wire routing and required some extra long motor leads. I decided that it would be better to move the electronics down in the space underneath the glass bed. This lets the wires be much shorter and also hidden underneath the bed and inside the slots of the extrusions. I also got some nice cable sleeving and wrapped all the power supply wires that run to the hotend.
