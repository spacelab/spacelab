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
    },
    js: {
      files: [
        'source/**/*.js'
      ],
      tasks: ['js'],
      options: {
        spawn: false,
        livereload: true
      }
    },
    icons: {
      files: [
        'source/css/icons/**/*.svg'
      ],
      tasks: ['newer:imagemin', 'grunticon'],
      options: {
        spawn: false,
        livereload: true
      }
    },
    media: {
      files: [
        'source/media/**/*.{jpg,png,gif,svg}'
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
