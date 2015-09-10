module.exports = function (grunt) {
  'use strict';

  grunt.config('uglify', {
    concat: {
      options: {
        preserveComments: 'all',
        sourceMap: true,
        beautify: true
      },
      src: [
        // 'bower_components/modernizr/modernizr-custom.js',

        'source/js/libs/**/*.js',
        'source/js/vendor/**/*.js',
        'source/js/modules/**/*.js',

        'source/js/script.js'
      ],
      dest: 'build/js/script.js'
    },
    minify: {
      options: {
        preserveComments: 'some',
        sourceMap: false,
        beautify: false
      },
      files: [
        {
          expand: true,     // Enable dynamic expansion.
          cwd: 'build/',      // Src matches are relative to this path.
          src: ['js/*.js'], // Actual pattern(s) to match.
          dest: 'build/',   // Destination path prefix.
          ext: '.js',   // Dest filepaths will have this extension.
          extDot: 'last'   // Extensions in filenames begin after the first dot
        },
      ],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
