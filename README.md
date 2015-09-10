spacelab
========

## Dependencies & Installation

* ruby
* node / npm
* Sass 3.4 (Selective Steve) `gem install sass`
* Bower 1.3 `npm install bower -g`
* Grunt 0.4.5 `npm install grunt-cli -g`

To install run `npm i && bower i -f`

The `-f` flag is currently required for the other spacelab sources.

### Tested on a Mac running

* OS X Yosemite 10.10.5 (14F27)
* ruby 2.0.0p481 (2014-05-08 revision 45883)
* node 0.12.7
* npm 2.14.1
* sass 3.4.16 (Selective Steve)
* bower 1.5.2
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
