module.exports = function(grunt) {
  'use strict';

  grunt.config('clean', {
    patternlab: {
      files: [
        {
          expand: true,
          cwd: 'patternlab',
          src: ['source']
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
