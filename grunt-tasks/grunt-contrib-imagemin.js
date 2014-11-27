module.exports = function (grunt) {
  'use strict';

  grunt.config('imagemin', {
    dist: {
      files: [
        {
          expand: true,
          cwd: 'source/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'temp/'
        }
        ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
};
