/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    requirejs: {
      build: {
        options: {
          baseUrl: '.',
          name: 'test/build_test.js',
          paths: {
            doTCompiler: 'components/doT/doT',
            text: 'components/requirejs-text/text',
            doT: 'doT'
          },
          excludeShallow: ['doTCompiler', 'text', 'doT'],
          optimization: 'none',
          out: 'test/optimized.js'
        }
      }
    },

    connect: {
      tests: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    },

    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          define: true,
          console: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      plugin: {
        src: ['doT.js']
      }
    },
    regarde: {
      js: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        spawn: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task.
  grunt.registerTask('default', ['jshint', 'connect', 'regarde']);

};
