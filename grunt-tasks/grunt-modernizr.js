module.exports = function(grunt) {
  'use strict';

  grunt.config('modernizr', {
    dist: {
      devFile: 'bower_components/modernizr/modernizr.js',
      outputFile: '<%= buildDir %>/js/modernizr.js',
      files: {
        src: ['source/**/*.js', 'source/**/*.scss']
      }
    }
  });

  grunt.loadNpmTasks('grunt-modernizr');
};
