module.exports = function(grunt) {
  'use strict';

  grunt.config('clean', {
    build: {
      src: [
        'build',
        'cms',
        'temp'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
