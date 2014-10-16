module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Default task(s).
  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Grunt is working! ').ok();
  });

};
