module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    html: {
      files: [
        'source/partials/**/*.hbs',
        'source/layouts/**/*.hbs',
        'source/data/**/*.{json,yml}',
        'source/pages/**/*.hbs'
      ],
      tasks: ['html'],
      options: {
        spawn: false,
        livereload: true
      }
    },
    css: {
      files: [
        'source/**/*.scss'
      ],
      tasks: ['css'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
