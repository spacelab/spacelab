module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Load tasks
  grunt.loadTasks('grunt-tasks');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s).
  grunt.registerTask('default', ['build', 'connect', 'watch']);

  grunt.registerTask('prepare', ['clean', 'imagemin', 'copy', 'grunticon']);
  grunt.registerTask('html', ['assemble']);
  grunt.registerTask('css', ['sass', 'autoprefixer']);

  grunt.registerTask('build', ['prepare', 'html', 'css']);
};
