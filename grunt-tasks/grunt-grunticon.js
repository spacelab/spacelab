module.exports = function(grunt) {
  'use strict';

  grunt.config('grunticon', {
    icons: {
      options: {
        cssprefix: '%icon-',
        datasvgcss: '../../source/css/icons/_icons.scss',
      },
      files: [{
        expand: true,
        cwd: 'temp/css/icons',
        src: ['*.svg'],
        dest: 'temp/grunticon'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-grunticon');
};
