module.exports = function(grunt) {
  'use strict';

  // Require time grunt to show build time statistics
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version + "\\n" %>' +
             '* <%= grunt.template.today() + "\\n" %>' +
             '* <%= pkg.homepage + "\\n" %>' +
             '* Copyright (c) <%= grunt.template.today("yyyy") %> - <%= pkg.author %> */ <%= "\\n" %>'
  });

  // Load tasks
  grunt.loadTasks('grunt-tasks');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s).
  grunt.registerTask('default', ['build', 'run']);

  grunt.registerTask('prepare', ['clean', 'imagemin', 'grunticon']);
  grunt.registerTask('html', ['assemble']);
  grunt.registerTask('css', ['sass', 'autoprefixer']);
  grunt.registerTask('js', ['uglify:concat']);
  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify:minify']);


  grunt.registerTask('build', ['prepare', 'css', 'js', 'html']);
  grunt.registerTask('cms', ['build', 'minify', 'concat']);

  grunt.registerTask('run', ['connect', 'watch']);

  grunt.registerTask('deploy', ['ftp-deploy']);
};
