---
title: CubeSat Deployable Antenna
layout: post
image: /images/satellite/deployed.png
date: 2015-02-16
tags: [satellite]
published: true
---

My senior project for my Mechanical Engineering degree. A parabolic deployable antenna for CubeSats to provide Ka band transmission from beyond low earth orbit.

<!--more-->

Here it is, the moment we've all been waiting for. My senior project. Graduating seniors at Cal Poly are presented a variety of industry sponsored projects and we rank out top ten and are placed on teams accordingly. I'm on a team of four and we are working on this deployable antenna for NASA JPL. The goal is to make a half meter parabolic reflector that can be stowed in a 1.5U CubeSat, or 10x10x15 cm.

This project has been done before, most notably with [Aeneas](https://www.isi.edu/projects/serc/aeneas) by USC. Some other schools have also attempted it and they have all come back to this "umbrella" style design. We decided that we wanted to branch out. The umbrella has been done, and it seems like it's reaching the end of its rope. The incremental improvements are not enough, we need to break the mold and do something crazy!

![CubeSat](/images/satellite/miniprototype.jpg)

We were inspired by the [AstoMesh](https://www.northropgrumman.com/BusinessVentures/AstroAerospace/Products/Pages/AstroMesh.aspx) from Northrop Grumman, to work on a drum based design where the mesh is attached to the edge of the drum and stretched down into a paraboloid. So we came up with this drum, using scissor shapes.

![CubeSat](/images/satellite/cover.jpg)

This is a bigger prototype, scaled up by 2.5x. It uses milled PVC vertices and 3d printed sliders and wood struts. The vertical pipes (vertices) have two sliders inside them, connected by a spring to pull them together which spreads the wood scissor struts. This prototype has 12 sides. The number of sides and length of struts and vertices were not optimized for the prototype, it was purely to prove the mechanism.

![CubeSat](/images/satellite/8simplex.jpg)

The final optimized design turns out to use nine sides, so we've been calling it "The Nonagon". The metal mesh needs to be stretched down into a paraboloid, so this is done using a structure net. There is a net on both sides of the drum, and at each intersection of the net, the front net is tied to the back net. These ties can be tensioned to pull the net into the correct shape.

The net pattern is something of a conundrum. Northrop uses a geodesic pattern on their net, which is optimal for surface accuracy, but much more involved to manufacture. Since we are a student team running short on time, we instead opted for a simplex shape shown above. This means every vertex is connected to every other vertex with a line. This is much easier to manufacture since each line is only connected to a rigid point on the frame, and not tied between each other like a geodesic pattern is.

![CubeSat](/images/satellite/systematicerrorfail.jpg)

The paraboloid needs to be accurate to the correct shape to about 1/20th of the wavelength you are using, which in our case turns out to be about a half a millimeter. To see how much the flat facets of the simplex shape deviate from the perfect shape, I wrote a MATLAB program. This program takes the size and some other parameters about the desired paraboloid, and the number of sides of the approximating shape, as well as which vertices are connected to which other vertices. This is the first plot the program produced, which is totally psychedelic, as well as totally wrong.

![CubeSat](/images/satellite/systematicerror.png)

I missed a sign somewhere. The whole program failed because of one missing - sign. Here it is in all its glory, the systematic deviation of the reflector caused by using the 8 simplex shape. The program works by taking all the inputs and finding every intersection of the net lines with each other, and then sorting them and removing any duplicates. After that, the Delaunay triangulation is taken, which splits up the points into a surface of many small triangles. 3 points define a plane, so the formula for every facet is calculated and used to find the error at every point. The plot above is the result of this process for 250,000 points across the surface of the reflector. The average error is about 0.6 mm, close enough for this student project.

![CubeSat](/images/satellite/stowed.png)

So here we are, lengths optimized, math done, getting ready to make this reflector. It will be a huge challenge. All the parts on this structure are millimeter scale, and we need to make a bunch of them - there are over 150 parts in the assembly. Most parts will be CNC'd at Cal Poly, and some may be investment cast. I'll post more as the building commences!
