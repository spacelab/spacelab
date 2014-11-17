module.exports = function(grunt) {
  'use strict';

  grunt.config('clean', {
    patternlab: {
      files: [
        {
          expand: true,
          cwd: 'patternlab',
          src: ['config/config.ini', 'source/*', '!source/README', 'public/*', '!public/README']
        }
      ],
    },
    'patternlab-source': {
      files: [
        {
          expand: true,
          cwd: 'patternlab',
          src: ['source/*', '!source/README']
        }
      ],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
