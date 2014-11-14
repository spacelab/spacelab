module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    'patternlab-source': {
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
    },
    'patternlab-public': {
      files: [
        {
          expand: true,
          cwd: 'patternlab/public',
          src: ['index.html', 'data/**/*.*', 'patterns/**/*.*',],
          dest: 'build'
        },
        {
          expand: true,
          cwd: 'patternlab/core',
          src: ['styleguide/**/*.*'],
          dest: 'build'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
