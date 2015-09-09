module.exports = function(grunt) {
  'use strict';

  grunt.config('connect', {
    server: {
      options: {
        port: 3000,
        hostname: 'localhost',
        base: 'build'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
