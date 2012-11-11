# MUDnode something something

This is a game. It's kind of like a MUD. It has something about forks or branches or cloning or pushing or pulling. Still figuring out that part.

## Getting Started
* Clone the repo
* `git submodule update --init --recursive`
* `npm install`
* Horse Dance! (haaaaaaaaaaaaay sexxxay lady!)

## Development

This project is set up to use [grunt](https://github.com/gruntjs/grunt) for a couple of tasks, primarily linting code and building it out.

## Active Development

Running `grunt` will lint all of the JS files. We're using [jshint](http://jshint.com) for linting, along with a series of options that can be seen in our gruntfile (`grunt.js`).

Development of modules take place in `src/app`, which is built (mostly)
off of [Dojo Boilerplate](https://github.com/csnover/dojo-boilerplate).

The workflow is like so: 

* Start the server with `node server` in the root of the repo
* Write awesome code
* Reload http://localhost:4000 (or whatever the configured port is) to see awesome code in action

## Dependencies

MUDnode requires the following packages: 

* [Node](https://github.com/joyent/node) (we recommend installing via [Homebrew](https://github.com/mxcl/homebrew) if using OSX)
* [npm](https://github.com/isaacs/npm) (typically installed with Node)
* [Grunt](https://github.com/gruntjs/grunt) (install via `npm install grunt -g`)
* [JSHint](https://github.com/jshint/jshint) (install via `npm install jshint -g`)

## Building / Distribution

You can run `grunt build` to kick off the Dojo build process (you can also run `./bin/build.sh` but using grunt means we can reconfigure build later without having to change this step).

With node, it takes a good 20-30 seconds to build and it puts out a built version of the `src` dir into the `dist` dir, along with some modifications to our root `index.html` for production purposes.

To see the built code in action, you run the server with a different `NODE_ENV` in play, like so: `NODE_ENV=production node server`.
