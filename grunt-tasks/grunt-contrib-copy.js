module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    normalize: {
      src: 'bower_components/normalize.css/normalize.css',
      dest: 'bower_components/normalize.css/_normalize.scss',
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
