module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    normalize: {
      src: 'node_modules/normalize.css/normalize.css',
      dest: 'node_modules/normalize.css/_normalize.scss'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
