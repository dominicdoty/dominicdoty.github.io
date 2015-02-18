---
title: Chainless Challenge
layout: post
image: /images/chainless/chainless12race.jpg
published: true
---

Turns out that making a hydraulic powered bike is a crazy idea. A crazy bad idea.

<!-- more -->

The point of the Chainless Challenge is to design and build a hydraulic powered bicycle and race it in three races. An endurance race of about 10 miles, a sprint race of a couple hundred yards, and an efficiency challenge.

The races are supposed to test different aspects of the bike and prevent you from designing a bike that's too specialized in one area. The bikes are allowed to have an accumulator to store fluid pressure, and regenerative braking is a stretch goal. Regenreative braking converts the kinetic energy of the bikes movement into potential in the form of pressure in the accumulator. Most teams operated under the assumption that charging the accumulator and regenerative braking had to be separate systems. But when you think about it, regenerative braking accomplishes the same purpose, charging the accumulator.

<div style="background-color:white">
![Hydraulic circuit]({{ site.url }}/images/chainless/hydcircuit.png)
</div>

This it the hydraulic circuit we designed. It was actually pretty genius. It only uses two valves, a couple check valves, and the fact that a hydraulic pump is also a motor. During regular operation, both valves are open. This allows the pump driven by the pedals to draw fluid in, and push it to the motor on the rear wheel. Two of the check valves prevent fluid from bypassing the motor or returning to the reservoir. Close both valves however, and the motor becomes a pump. It draws fluid from the resevoir through the check, and forces it through another check into the accumulator. When both valves are reopened, the pressurized fluid circulates back through the motor and into the resevoir.

![Chainless Bike 2012]({{ site.url }}/images/chainless/chainless12comp.jpg)

This was our first year bike, which we built when we were freshmen. The team at the time was 3 freshmen Mechanical Engineering students, one senior ME and one senior Agricultural Business student. We did remarkably well, tying for first in the endurance race \(after stopping to tighten loose spokes\) and first in the endurance race. This bike showcases the biggest issue of a hydraulic bike: gear ratios. A hydraulic pump wants to turn at minimum 200 - 300 rpm to generate efficiencies above 50%. A human rides a bicycle at about 60 rpm, if you're sort of booking it. This bike solved that issue using bicycle chains \(I know, ironic in the Chainless Challenge\) in a double gear increaser on the pedal input to produce a ratio around 1:4. The rear had a single reduction of about 2:1. If the hydraulic system is considered a 1:1 ratio \(which it should be as both pumps were equal displacement, but really wasn't\) that gives an overall ratio of about 1:2. A normal bike has a ratio of about 1:2.7 for a meaty gear to get up hills but still go reasonably fast. This ratio worked, but a higher one would have been nicer in the endurance. Changing gears would have been exceptional. One interesting thing is that in order to attach a large diameter fixed gear to the rear wheel, we machined an adapter plate to bolt onto the hub's disc brake pattern and then bolt onto a front chainring.

![Chainless Bike 2013]({{ site.url }}/images/chainless/chainless13.png)

Next year we optimized a bit. First off, you can see this bike is a tandem. That allows a lot more room for hydraulics. To avoid being ribbed so much at the Chainless Challenge, we decided to forgo the chain gearing and use spur gears instead. Belts would have been a viable option, but if you really believe that belts aren't basically chains then you're lying to yourself. This bike featured a massive front spur gear on the pedals. To attach it to the bike, we cut the square taper hole off an old steel crank and press fit it in the center of the gear. Then we drilled and directly mounted a pedal to the gear. The other pedal mounted on the stock square taper spindle. The same hydraulic circuit was used with Parker F11 5cc/rev motors. The accumulator was sized up to a gallon bladder accumulator. Another small change was the use of clear hoses for low pressure lines. This turned out to be a boon as being able to see air in the lines is a huge help in setting up the circuit.

![Chainless Bike 2013 Comp]({{ site.url }}/images/chainless/chainless13comp.jpg)

The bike also used a different resevoir than the year before \(which was a vinyl fence post\) - a camelback style bladder made by MSR. We found last year that after a long period of riding, the fluid would froth and trap a lot of air in it. This could be solved with a bigger resevoir, but carrying around more fluid wasn't an option. We used the bladder because we were able to remove almost all the air from the system, so froth couldn't form. As fluid was drawn out to charge the accumulator, the bladder simply shrunk.

![Chainless Bike Hub]({{ site.url }}/images/chainless/rearhub.jpg)

The other unique part of this bike is the circus bike rear wheel. As I said earlier, gear ratios are a problem. We solved it up front with the huge spur gear, but the rear needed a solution. Thats when we realized that the wheel is effectively part of the gear ratio of the bike, and by reducing the diameter, we geared down the system. By using the smallest wheel possible, we were able to directly couple the motor to the rear wheel.

The last year that I was involved in Chainless Challenge we took a decidedly different approach. Further optimizations of our old system wouldn't yeild much more gains. Illinois Institute of Technology had for the last two years brough a bike that used hydraulic cylinders in a sort of push pull arrangement like a steam engine. Both times the bike broke and we were able to hold them off, but we saw the writing on the wall. A pump based system is far too springy and lossy, since the fluid leakage is significant at low rpms. A cylinder has almost no leakage accross it seals, at the cost of higher friction. We decided to try and build a cylinder based bike, since it was evidently better than the pump system. Unfortunately, the system is very fragile. It's difficult to find small high pressure cylinders, and the crankshaft like linkage to run them is delicate. When we went to ride the bike for the first time, every hole in the pedal assembly stripped its keyway. The bike ended right there, and unfortunately I don't have any pictures of it.
