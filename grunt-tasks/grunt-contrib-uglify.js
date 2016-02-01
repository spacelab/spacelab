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
        'node_modules/jquery/dist/jquery.js',
        
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/button.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap/popover.js',

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
