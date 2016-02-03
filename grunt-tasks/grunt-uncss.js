module.exports = function (grunt) {
  'use strict';

  grunt.config('uncss', {
    options: {
      ignore: [
      ]
    },
    build: {
      files: {
        'build/css/style.css': ['build/index.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-uncss');
};
