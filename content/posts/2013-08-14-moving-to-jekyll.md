+++
date = "2013-08-14T02:07:40Z"
draft = false
title = "Moving to Jekyll"
categories = ["website"]
tags = ["jekyll"]
weight = 3

+++

For a while I wanted to get a proper blog system working on my site but I was using Wordpress. I didn't like this.

So, I finally got some time and implemented a [Jekyll][jekyll] site/blog!



I took my old website and refromed it to work with Jekyll and here we are. So far it looks pretty good. [Octopress][octopress] was a bit overkill for me.

GitHub have also recently released the ['github-pages' gem][ghpgem] that allows you to test out your site locally before pushing. The github-pages gem also has the benefit of closely matching the code they really use at GitHub.

Install Jekyll Locally
----------------------

EDIT:

I previously had some trouble installing Jekyll on OS X (which you can find below), but now it is easier than ever! Just:
1. Make sure you have Xcode and the Command Line Developer Tools installed
2. Then in the terminal, execute `sudo gem install jekyll`
3. You can now create a new Jekyll site with `jekyll init`
4. Then build and serve the site with `jekyll serve --watch`

The old instructions:

> I have had some trouble getting things installed on mac though. Heres what I did. (From a fresh Mountain Lion install)
> 
> 1. Install [Homebrew][brew].
> 2. Once that's done do these:
> 
> ```
> brew install rbenv
> brew install ruby-build
> rbenv install 1.9.3-p194
> rbenv rehash
> rbenv global 1.9.3-p194
> ruby --version # Check that the version is 1.9.3-p194
> gem install bundler
> gem install github-pages
> ```
> 3. The `github-pages` install installs Jekyll and all the dependencies for you.
> 4. So now, in the website directory you can `jekyll serve`.
> 5. And if there are no errors you can navigate to `http://localhost:4000`.

[jekyll]:    http://jekyllrb.com
[octopress]: http://octopress.org
[ghpgem]:    https://github.com/blog/1581-cutting-the-github-pages-gem
[brew]:      http://brew.sh