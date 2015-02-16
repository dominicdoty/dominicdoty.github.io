---
title: Toner Transfer Laminator
layout: post
image: /images/n64/laminator.jpg
published: true
---

On the quest to make my own circuit boards by the toner transfer method, I immediately realized that the standard iron would not cut it. So I purchased this laminator on craigslist for $20 to modify. <!-- more --> The laminator originally ran at two temperatures, neither high enough to melt laser toner onto a circuit board. I modified the laminator to run hotter by tricking its processor with a resistor. The laminator's temperature is controlled by reading a thermistor pressed against the rollers and turning the heating elements on and off. While the laminator was heating up, I measured the temperature of the rollers and the resistance of the thermistor and graphed them. Using this data, I extrapolated what additional resistance was necessary to have the laminator turn off at the temperature I required. I added this resistance, and the laminator heated out of control, full power to the heaters with no regulation. Measuring again in this new area of the thermistor's operation, I found out that I entered a thoroughly non-linear region of resistance for the thermistor. I used this to refine my resistor value and get the laminator to run really hot, but not so hot as to melt everything. Success!
![Toner Transferred board]({{ site.url }}/images/n64/toner.jpg)
