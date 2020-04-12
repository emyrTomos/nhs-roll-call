module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      bundle: {
        src: 'index.js',
        dest: 'nhs-roll-call.js'
      },
      options: {
        browserifyOptions: {
          debug: true
        },
        transform: [
          ['vueify']
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', function() {
    grunt.task.run('browserify');
  });
};