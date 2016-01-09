+++
date = "2013-09-15T12:00:00Z"
title = "Decoding Audio with FFMpeg"
description = "Decoding audio in any format was needed for analysis, so FFMpeg came to the rescue."
tags = ["ffmpeg", "audio"]
categories = ["projects", "crates"]

+++

For some reason there doesn't seem to be much help on the internet on how to basically decode an audio file to raw samples using FFMpeg...

So here's one I made!

As you can guess, I  looked for a long time and ran in to many problems. One big problem seemed to be that lots of example code used depreciated functions which complicated problems :( especially the resampling functions.

I got it working in the end though!

So I don't keep boring you, here's how I do it:

<script src="https://gist.github.com/jimjibone/6569303.js"></script>
