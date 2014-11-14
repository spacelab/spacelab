module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    patternlab: {
      files: [
          {
            src: 'patternlab-config.ini',
            dest: 'patternlab/config/config.ini'
          },
          {
            expand: true,
            cwd: 'source',
            src: ['_data/**/*.*', '_patterns/**/*.*'],
            dest: 'patternlab/source'
          }
        ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
