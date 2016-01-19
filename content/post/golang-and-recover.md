+++
date = "2016-01-19T22:02:56Z"
title = "golang and recover"
description = "Something"
tags = ["go"]
categories = ["code"]

+++

Go's `panic()` function is great, it allows you to cause the entire program to exit if there is an error, much like exceptions in another languages, except that Go will print out useful information about your current goroutines. On top of that, when panicking begins, all of your deferred functions are also called, allowing you to tidy up any resources before the program exits.

I used to think this was great already, but then I stumbled upon the `recover()` function when looking through the net package's source code. This allows you to capture and recover from a panic. Information about the panic is returned from the recover function, which you can then handle and attempt to correct the problem.

Here's an example of panic, defer and recover in action.

```go
package main

import "fmt"

func main() {
    fmt.Println("Starting things...")

    defer func() {
        if r := recover(); r != nil {
            fmt.Println("caught the panic:", r)
        }
    }()

    // Do something, then...
    panic("bad stuff")

    fmt.Println("...finished things")
}
```

[Try in the playground](https://play.golang.org/p/qR6r_K-y_8)

This came handy recently while attempting to unmarshal some JSON into a custom type. The json package was panicking and the error message was very unhelpful (not usual for Go in my experience). So, I did some digging and came across the `recover()` function which helped to pinpoint the point at which the panic occurred and led me to discover it was that I was trying to assign a value to a nil map!

