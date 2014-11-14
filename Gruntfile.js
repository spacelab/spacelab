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

  grunt.registerTask('default', ['build', 'connect', 'watch']);
  grunt.registerTask('build', ['sass', 'copy:patternlab-source', 'shell:patternlab', 'copy:patternlab-public']);

};
