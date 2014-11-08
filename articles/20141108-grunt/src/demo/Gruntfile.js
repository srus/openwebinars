/* jshint node:true */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    outdir: 'dist',
    concat: {
      css: {
        src: ['css/base.css', 'css/theme.css', 'css/main.css'],
        dest: '<%= outdir %>/css/style.css'
      },
      js: {
        options: {
          separator: ';'
        },
        src: ['js/lib1.js', 'js/lib2.js', 'js/main.js'],
        dest: '<%= outdir %>/js/bundle.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      build: {
        src: ['<%= outdir %>/js/bundle.js'],
        dest: '<%= outdir %>/js/script.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
