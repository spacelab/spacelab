spacelab
========

## Dependencies & Installation

* ruby
* node / npm
* Sass 3.4.11 (Selective Steve) `gem install sass`
* Bower 1.3.12 `npm install bower -g`
* Grunt 0.4.5 `npm install grunt-cli -g`

To install run `npm i && bower i -f`

The `-f` flag is currently required for the other spacelab sources.

## Usage

The following grunt tasks are available:

* `grunt html` Builds html files only
* `grunt css` Builds css files only
* `grunt js` Builds js files only
* `grunt build` Builds everything
* `grunt run` Spawns a [local server](http://localhost:3000) and runs watcher
* `grunt` The default task combines `build` and `run`
* `grunt deploy` FTP Deployment. You need to configure your host and authorization file first.
