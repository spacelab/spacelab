module.exports = function(grunt) {
  'use strict';

  grunt.config('shell', {
    patternlab: {
      command: "php patternlab/core/builder.php -gp"
    }
  });

  grunt.loadNpmTasks('grunt-shell');
};
