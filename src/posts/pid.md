---
title: Sous Vide PID
layout: post
image: /images/diysousvide/cover.jpg
date: 2014-12-24
tags: [diysousvide]
published: true
---

Sous Vide means something in French. PID means proportional, integral, derivative in Engineer. Here's a little Sous Vide controller I made for my Mom for Christmas this year. It's a Ebay controller, SSR, and a outlet stuffed in a softball trophy case from the Container Store.

<!--more-->

Here's a list of the parts I used:

- [Container Store Softball Case](https://www.containerstore.com/shop/collections?productId=10000577)
- [Ebay PID Controller](https://r.ebay.com/ZUyJxd)
- [Thermocouple](https://r.ebay.com/si0jMq)
- [Plug](https://smile.amazon.com/dp/B000KKK2SA)

Look around for PID's and make sure you get the best price with shipping. Ebay and Amazon are good sources. I went ahead and taped over my softball box to start cutting holes. Make sure you tape both the inside and outside of the box. If you're like me, then you'll scratch the entire thing up.

![Taped Box](/images/diysousvide/taped.jpg)

I drew out the outline of the PID controller with a Sharpie, as well as the plug and screw holes. I then drilled a hole in each corner of the PID outline and used a [jeweler's saw](https://www.ebay.com/bhp/jewelers-saw) to cut out the outline. Be sure to leave it a little tight and sand it for a good fit. My controller is held in the box only by a friction fit with the box. The outlet hole was drilled with a hole saw. The plastic is very brittle, and I cracked one in the process. Clamp a piece of wood against the back of the part you're drilling to support it.

![PID Installed](/images/diysousvide/side.jpg)

The wiring is pretty simple, and you should be able to figure it out on your own. I used some stranded electrical wire I picked up at the local Ace. I didn't anchor down the SSR since it couldn't really slide around with all the wires in there. I also picked up some rubber grommets to put in the power cord and thermocouple holes, it really gives it a much more finished look. The power and thermocouple lines are held in by simply tying a knot in them inside the case.

![PID Wired](/images/diysousvide/backcomp.jpg)

One thing I don't really like about the finished product is that the outlet I used has internal child safety blocks. It's supposed to stop you from putting anything in the plug that doesn't go into both prongs simultaneously. This is kind of annoying because it actually makes it very difficult to plug into, and you don't want to be very forceful with this brittle enclosure.

![Outlet Installed](/images/diysousvide/topcomp.jpg)

The last step was to test the whole system. I found this giant coffee maker in my basement and hooked it up and ran autotune. Autotune kinda sucks for this. For those that don't know, autotune manipulates the system and watches the response and uses that response to determine what kind of system it is and what the controller gains should be. The autotune values could hardly hold +- 10 degrees on the set point. A bit of math comes in handy now. Boiling water is a simple first order system, and it is very easy to measure the system properties at home. The way to do this is through a step response. There are some issues with this however. My coffee pot has some rudimentary controls in it, probably bang bang. To avoid running into boiling, where the other control system will start to mess about and ruin our measurements, we will step down rather than up.

![PID Loop](/images/diysousvide/pidloop.png)

If you don't know block diagram math, it's pretty simple. a line represents a number, a circle addition and subtraction, and a square multiplication. The loop simply takes what temperature we asked for, the set point, and what temperature we have, the output, and subtracts them. This is the error. It then multiplies the error by the proportional constant Kp. It also integrates the error over time and multiplies that by the integral constant Ki. It also takes the derivative of the error and multiplies that by the derivative constant Kd. Those three numbers added together are called the action. The action is what tells the heater how much to turn on. A large error means a large action, or the heater will turn on high. This is output to the process, or system. In our case this is the pot of water. The output is then measured by a thermometer.

![PID Test](/images/diysousvide/test.jpg)

The problem is finding what Kp Ki and Kd should be. A good method for this is the [Cohen-Coon Method](https://controls.engin.umich.edu/wiki/index.php/PIDTuningClassical#Cohen-Coon_Method). You wait for the system to reach steady state, and then introduce a step change in input. In this case, that would be waiting for the water to boil, and then unplugging the heater. Record the time and temperature for the whole response until it settles. This will take a long time. Then use the above equations in the Cohen-Coon link to calculate Kp Ki and Kd.
