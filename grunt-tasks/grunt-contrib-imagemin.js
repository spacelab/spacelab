module.exports = function (grunt) {
  'use strict';

  grunt.config('imagemin', {
    images: {
      files: [
        {
          expand: true,
          cwd: 'source/',
          src: ['**/*.{png,jpg,gif}', 'media/svg/**/*.svg'],
          dest: 'build'
        }
        ]
    },
    svg: {
      files: [
        {
          expand: true,
          cwd: 'source/',
          src: ['**/*.svg'],
          dest: 'temp'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
};
