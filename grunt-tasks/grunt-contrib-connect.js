module.exports = function(grunt) {
  'use strict';

  grunt.config('connect', {
    server: {
      options: {
        port: 3000,
        base: './patternlab/public',
        hostname: 'localhost',
        open: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
