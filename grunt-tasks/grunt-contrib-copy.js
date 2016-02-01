module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    build: {
      files: [
        {expand: true, flatten: true, src: ['node_modules/bootstrap-sass/assets/fonts/bootstrap/*'], dest: 'build/fonts/bootstrap/', filter: 'isFile'},
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
