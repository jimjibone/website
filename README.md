# website

The source for my website hosted at [jamesreuss.co.uk](http://jamesreuss.co.uk)

## What is this?

My website is now split into two parts; the source which is found in this repo, and the published site which is found in [jimjibone/jimjibone.github.com](https://github.com/jimjibone/jimjibone.github.com).

To help generate the completed site I make use of [Hugo](http://gohugo.io).

Hugo compiles all of my posts and other pages found in the `content` directory using the theme found in the `themes/timeline` directory.

## Deploying

To deploy new styles/formats or publish new posts to the served website, run the `deploy.sh` script. Make sure that you run it in the root directory of the repository.

`deploy.sh` uses Hugo to generate the site in the `public` submodule directory. This submodule actually points to the [jimjibone/jimjibone.github.com](https://github.com/jimjibone/jimjibone.github.com) repo which GitHub helpfully hosts for me.

## Development

Setting up for development is easy. First, make sure you have [Hugo](http://gohugo.io) installed.

Then run the following command to generate and serve the website.

```
hugo server
```
