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
      tasks: ['css', 'html'],
      options: {
        spawn: false,
        livereload: true
      }
    },
    js: {
      files: [
        'source/**/*.js'
      ],
      tasks: ['js', 'html'],
      options: {
        spawn: false,
        livereload: true
      }
    },
    media: {
      files: [
        'source/media/**/*.jpg',
        'source/media/**/*.png',
        'source/media/**/*.gif',
        'source/media/**/*.svg'
      ],
      tasks: ['newer:imagemin'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
