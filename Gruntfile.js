module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          './dist/highlight.css': './src/highlight.scss'      
        },{
          expand: true,
          cwd: 'example/scss',
          src: ['*.scss'],
          dest: './example/css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          './dist/highlight.min.css': './dist/highlight.css'
        }
      }
    },
    copy: {
      main: [{
        expand: true,   // copy to /dist folder for packaging
        cwd: 'src',
        src: '**',
        dest: 'dist'        
      },{
        expand: true,   // copy to /docs folder
        cwd: 'src',
        src: '**',
        dest: 'docs/_sass/rouge-base16-scss'
      }]
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'copy']);

};
