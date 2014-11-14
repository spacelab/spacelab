module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Load tasks
  grunt.loadTasks('grunt-tasks');

  // Default task(s).

  // A very basic default task.
  // grunt.registerTask('default', 'Log some stuff.', function() {
  //   grunt.log.write('Grunt is working! ').ok();
  // });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['shell:patternlab']);

};
