---
title: Laser - Motion Control!
layout: post
image: /images/laser/wiring.jpg
date: 2015-04-18
tags: [laser]
published: true
---

Holy smokes! Working motion control on my laser with the Smoothieboard! Click through, there is a video.

<!--more-->

<!-- This isn't so glamorous but it works... -->
<script>import LiteYoutube from '$lib/LiteYoutube.svelte';</script>
<div class="m-2">
  <LiteYoutube 
    playLabel=''
    videoId="tF7bwEJDgZI"
    videoTitle="90W CO2 Laser Cutter - Test Run"
    posterImageSrc="/images/laser/laserrunning_yt.webp"/>
</div>

I got the motion control up and running! Right now, the two motors on the Y axis are running as two separate axis, and I just use coordinated multi axis moves to move the Y. This limits my Y speed to about half the X speed as the controller cannot keep up and jams the axis. I'm working on a more involved programmatic fix that will allow both axes to hit full speed.
