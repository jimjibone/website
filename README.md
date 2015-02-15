# website

The source for my website hosted at [jamesreuss.co.uk](http://jamesreuss.co.uk)

## What is this?

My website is now split into two parts; the source which is found in this repo, and the published site which is found in [jimjibone/jimjibone.github.com](https://github.com/jimjibone/jimjibone.github.com).

To help generate the completed site I make use of [Hugo](http://gohugo.io) and [Gulp](http://gulpjs.com).

Hugo compiles all of my posts and other pages found in the `content` directory using the layouts found in the `layouts` directory. It nicely reads in the markdown content and generates HTML based on the layouts I have defined.

I then use Gulp to generate my Sass styles. These include the [Bourbon](http://bourbon.io) and [Neat](http://neat.bourbon.io) mixin libraries which gives my site responsive styling.

## Deploying

To deploy new styles/formats or publish new posts to the served website, run the `deploy.sh` script. Make sure that you run it in the root directory of the repository.

`deploy.sh` uses Gulp and Hugo to generate the site in the `public` submodule directory. This submodule actually points to the [jimjibone/jimjibone.github.com](https://github.com/jimjibone/jimjibone.github.com) repo which GitHub helpfully hosts for us.

## Development

Setting up for development is easy. First, make sure you have the dependencies installed:

- [Go](http://golang.org/doc/install)
- [Hugo](http://gohugo.io)
- [node.js & npm](http://nodejs.org)

Then install Gulp and all of the required modules:

```
npm install
```

Then, using two terminals, or whatever works best for you, execute simultaneously:

```
gulp watch
# and
hugo server --buildDrafts --watch
```
