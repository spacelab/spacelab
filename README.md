spacelab v1.0.0
========

## Dependencies & Installation

* node / npm
* Grunt 0.4.5 `npm install grunt-cli -g`

To install run `npm i`

### Tested on a Mac running

* OS X Yosemite 10.11.3
* node 5.5.0
* npm 3.5.3
* grunt-cli 0.1.13
* grunt 0.4.5

## Usage

The following (public) grunt tasks are available:

* `grunt` The default task combines `build` and `run`
* `grunt build` Builds everything into `build` folder
* `grunt cms` Prepare build for CMS integration (minify and banners in css/js)
* `grunt run` Spawns a [local server](http://localhost:3000) and runs file watcher
* `grunt deploy` FTP Deployment. You need to configure your host and authorization file first.
* `grunt prepare`, `grunt html`, `grunt css`, `grunt js` and `grunt minify` are internal aliases run by other tasks
