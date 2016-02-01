module.exports = function(grunt) {
  'use strict';

  grunt.config('bootlint', {
    options: {
      relaxerror: [
        'W005' // ignore missing jquery
      ],
      showallerrors: false,
      stoponerror: false,
      stoponwarning: false
    },
    files: ['build/*.html']
  });

  grunt.loadNpmTasks('grunt-bootlint');
};
