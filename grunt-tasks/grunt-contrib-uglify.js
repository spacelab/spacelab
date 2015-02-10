module.exports = function (grunt) {
  'use strict';

  grunt.config('uglify', {
    options: {
      preserveComments: 'some',
      sourceMap: true
    },
    build: {
      src: [
        'source/js/vendor/**/*.js',
        'source/js/modules/**/*.js',

        'source/js/script.js'
      ],
      dest: '<%= buildDir %>/js/script.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
