module.exports = function(grunt) {
  'use strict';

  grunt.config('clean', {
    build: {
      src: [
        'node_modules/normalize.css/_normalize.scss',
        'build',
        'cms',
        'temp'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
