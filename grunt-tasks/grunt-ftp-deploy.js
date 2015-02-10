module.exports = function (grunt) {
  'use strict';

  grunt.config('ftp-deploy', {
    ftp: {
        auth: {
          host: '',
          port: 21,
          authKey: 'ftp'
        },
        src: 'build',
        dest: '',
        exclusions: []
      }
  });

  grunt.loadNpmTasks('grunt-ftp-deploy');
};
