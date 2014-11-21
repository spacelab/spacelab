module.exports = function(grunt) {
  'use strict';

  grunt.config('assemble', {
    options: {
      flatten: true,
      partials: ['source/partials/**/*.hbs'],
      layout: 'source/layouts/default.hbs',
      data: ['source/data/**/*.{json,yml}']
    },
    pages: {
      src: 'source/pages/**/*.hbs',
      dest: 'build/'
    }
  });

  grunt.loadNpmTasks('assemble');
};
