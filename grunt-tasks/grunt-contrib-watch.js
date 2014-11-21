module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    assemble: {
      files: [
        'source/partials/**/*.hbs',
        'source/layouts/default.hbs',
        'source/data/**/*.{json,yml}',
        'source/pages/*.hbs'
      ],
      tasks: ['assemble'],
      options: {
        spawn: false,
        livereload: true
      }
    },
    sass: {
      files: [
        'source/**/*.scss'
      ],
      tasks: ['sass', 'autoprefixer'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
