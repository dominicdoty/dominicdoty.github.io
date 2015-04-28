---
title: Laser - Motion Control!
layout: post
image: /images/laser/wiring.jpg
published: true
---

Holy smokes! Working motion control on my laser with the Smoothieboard! Click through, there is a video.
<!-- more -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/tF7bwEJDgZI" frameborder="0" allowfullscreen></iframe>

I got the motion control up and running! Right now, the two motors on the Y axis are running as two separate axis, and I just use coordinated multi axis moves to move the Y. This limits my Y speed to about half the X speed as the controller cannot keep up and jams the axis. I'm working on a more involved programmatic fix that will allow both axes to hit full speed.