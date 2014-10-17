module.exports = function(grunt) {
  'use strict';

  grunt.config('sass', {
    style: {
      src: 'source/css/style.scss',
      dest: 'build/css/style.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
