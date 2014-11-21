module.exports = function (grunt) {
  'use strict';

  grunt.config('autoprefixer', {
    options: {
      browsers: ['last 2 version', 'Explorer >= 9', 'Firefox >= 15']
    },
    build: {
      files: [
        {
          expand: true,
          cwd: 'dist/',
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
