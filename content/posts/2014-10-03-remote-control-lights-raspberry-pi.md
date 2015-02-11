+++
date = "2014-10-03T21:45:13Z"
title = "Remote Control Lights using a Raspberry Pi"
categories = ["home automation"]
tags = ["raspberry pi", "lightwave rf", "lighting", "home automation"]
importance = 4
thumbnail = "http://img.youtube.com/vi/UApxWZYKNRU/0.jpg"

+++

I got fed up with using my Arduino to interface with hardware. It's really easy to use and wire things up, but actually transferring data between it and a PC (and possibly a server of some sort) is pretty painful. It usually requires using serial communications and some data serialisation method. So I thought I'd use a Raspberry Pi for a change!



I already had a 433 MHz transmitter/receiver pair working with the Arduino. I was trying out both the [lawrie/LightwaveRF][lawrie] and [roberttidey/LightwaveRF][roberttidey] libraries to get my ceiling light and wall plug lights switching on and off remotely and it was awesome. But again, the Arduino brought pain when interfacing with a server.

I plugged the 433 MHz transmitter into the Raspberry Pi's GPIO's, grabbed [lawrie's][lawrie] library, converted it to be Raspberry Pi friendly using [wiringPi][wiringPi] and created a simple C++ main function to spew out some messages every couple of seconds. This was really easy using wiringPi!

Then I created this video.

{{% youtube UApxWZYKNRU %}}

The system seemed to work great! But it now needed the ability to receive messages too, for some unknown reason. So I attempted to use [lawrie's][lawrie] library again but it really failed for reasons that I forget... So I switched to using [roberttidey's][roberttidey] library for RX, made it Raspberry Pi friendly and it worked!

I uploaded the code to GitHub at [jimjibone/LightwaveRF][github] so feel free to clone, fork or whatever.

I would ideally prefer to switch to use entirely [roberttidey's][roberttidey] library, converted to use the Raspberry Pi, but initial attempts failed when trying to get TX working. I have also recently used this library with the Spark Core and it works really well, so enabling the library to work on the Pi would be awesome.

[lawrie]:      https://github.com/lawrie/LightwaveRF
[roberttidey]: https://github.com/roberttidey/LightwaveRF
[wiringPi]:    http://wiringpi.com
[video]:       https://www.youtube.com/watch?v=UApxWZYKNRU
[github]:      https://github.com/jimjibone/LightwaveRF
