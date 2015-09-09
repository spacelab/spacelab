module.exports = function(grunt) {
  'use strict';

  grunt.config('htmlmin', {
    build: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: [
        {
          expand: true,
          cwd: 'build',
          src: ['**/*.html'],
          dest: 'build',
          ext: '.html',
          extDot: 'last'
        }
      ]

    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
