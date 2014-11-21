module.exports = function(grunt) {
  'use strict';

  grunt.config('connect', {
    server: {
      options: {
        port: 3000,
        base: 'build',
        hostname: 'localhost'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
