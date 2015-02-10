module.exports = function(grunt) {
  'use strict';

  grunt.config('assemble', {
    options: {
      flatten: true,
      partials: ['source/partials/**/*.hbs'],
      layoutdir: 'source/layouts',
      layout: 'default.hbs',
      data: ['source/data/**/*.{json,yml}'],
      helpers: ['handlebars-helper-filehash', 'handlebars-helper-partial', 'source/helper/**/*.js']
    },
    pages: {
      src: 'source/pages/**/*.hbs',
      dest: 'build/'
    }
  });

  grunt.loadNpmTasks('assemble');
};
