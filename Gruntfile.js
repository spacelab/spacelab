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

  grunt.registerTask('prepare', ['clean', 'newer:imagemin', 'copy', 'grunticon']);
  grunt.registerTask('html', ['assemble']);
  grunt.registerTask('css', ['sass', 'autoprefixer']);
  grunt.registerTask('js', ['modernizr', 'uglify']);

  grunt.registerTask('build', ['prepare', 'css', 'js', 'html']);

  grunt.registerTask('run', ['connect', 'watch']);

  grunt.registerTask('deploy', ['ftp-deploy']);
};
