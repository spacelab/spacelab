module.exports = function (grunt) {
  'use strict';

  grunt.config('uncss', {
    options: {
      ignore: [
        /\.affix+/,
        /\.affix-top+/,
        /\.affix-bottom+/,
        /\.in+/,
        /\.fade+/,
        /\.active+/,
        /\.focus+/,
        /\.disabled+/,
        /\.collapse+/,
        /\.collapsing+/,
        /\.collapsed+/,
        /\.open+/,
        /\.dropdown-backdrop+/,
        /\.modal-open+/,
        /\.modal-backdrop+/,
        /\.modal-scrollbar-measure+/,
        /\.top+/,
        /\.bottom+/,
        /\.left+/,
        /\.righ+/,
      ]
    },
    build: {
      files: {
        'build/css/style.css': ['build/index.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-uncss');
};
