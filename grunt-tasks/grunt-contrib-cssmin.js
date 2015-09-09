/*
 * Compress CSS files.
 */
module.exports = function (grunt) {
  'use strict';

  grunt.config('cssmin', {
    cms: {
      files: [
        {
          expand: true,     // Enable dynamic expansion.
          cwd: 'build',      // Src matches are relative to this path.
          src: ['**/*.css'], // Actual pattern(s) to match.
          dest: 'build',   // Destination path prefix.
          ext: '.css',   // Dest filepaths will have this extension.
          extDot: 'last'   // Extensions in filenames begin after the first dot
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
