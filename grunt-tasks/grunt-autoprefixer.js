module.exports = function (grunt) {
  'use strict';

  grunt.config('autoprefixer', {
    options: {
      browsers: ['last 2 version']
    },
    build: {
      files: [
        {
          expand: true,
          cwd: 'build/',
          src: ['**/*.css'],
          dest: 'build/',
          ext: '.css',
          extDot: 'last'
        },
      ],
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
};
