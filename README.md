# website

This is the source for [jamesreuss.co.uk](http://jamesreuss.co.uk).

It is a static site built using [Hugo](http://gohugo.io) and [Gulp](http://gulpjs.com/) for [Sass](http://sass-lang.com/) compilation.

For most post editing and development activities see the Hugo documentation. Also, it might be handy to look at the Sass documentation.

Most of the development and deployment process is taken care of in the Makefile.

## Dependencies

- [Hugo](http://gohugo.io)
- [Node.js & npm](http://nodejs.org)
- Install theme dependencies with `make deps`

## Deployment

Just run `make`.

## Development

You have two options. You can either run the Hugo server and Gulp watcher manually in two terminals:

```
# terminal 1
make dev-html
# terminal 2
make dev-theme
```

Or utilise `make`'s parallel execution mode by running:

```
make -j 2 dev
```
