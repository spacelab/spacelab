module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    sass: {
      files: [
        'source/**/*.scss'
      ],
      tasks: ['sass'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
