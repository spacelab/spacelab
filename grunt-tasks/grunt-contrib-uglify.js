module.exports = function (grunt) {
  'use strict';

  grunt.config('uglify', {
    options: {
      preserveComments: 'some',
      sourceMap: true
    },
    build: {
      src: [
        'source/js/modules/**/*.js',

        'source/js/script.js'
      ],
      dest: 'build/js/script.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
