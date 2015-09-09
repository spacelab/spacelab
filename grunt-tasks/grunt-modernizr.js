module.exports = function(grunt) {
  'use strict';

  grunt.config('modernizr', {
    dist: {
      devFile: 'bower_components/modernizr/modernizr.js',
      outputFile: 'bower_components/modernizr/modernizr-custom.js',
      files: {
        src: ['source/**/*.{scss,js}']
      }
    }
  });

  grunt.loadNpmTasks('grunt-modernizr');
};
