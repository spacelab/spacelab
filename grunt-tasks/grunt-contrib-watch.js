module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    patternlab: {
      files: [
        'patternlab/source/_patterns/**/*.mustache',
        'patternlab/source/_patterns/**/*.json',
        'patternlab/source/_data/*.json',
      ],
      tasks: [ 'shell:patternlab' ],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
