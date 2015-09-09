module.exports = function (grunt) {
  'use strict';

  grunt.config('concat', {
    options: {
      banner: '<%= banner %>'
    },
    banner: {
      files: [
        {
          expand: true,
          cwd: 'build',
          src: ['**/*.{css,js}'],
          dest: 'build',
          // ext: '.{css,js}',
          extDot: 'last'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
