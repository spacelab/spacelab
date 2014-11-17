module.exports = function(grunt) {
  'use strict';

  grunt.config('clean', {
    build: {
      files: [
        {
          src: ['build']
        }
      ],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
