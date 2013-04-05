/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // clean
    // ---------------
    // Clean away the old generated file to make sure we can generate a new.
    clean: {
      optimized: ['test/optimized/build.js']
    },

    // requirejs
    // ---------------
    requirejs: {
      build: {
        options: {
          baseUrl: 'test/build',
          include: ['doT!../persons'],
          paths: {
            doTCompiler: '../../components/doT/doT',
            text: '../../components/requirejs-text/text',
            doT: '../../doT'
          },
          stubModules: ['doTCompiler', 'text', 'doT'],
          out: 'test/build/build.js'
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

    // mocha
    // ---------
    mocha: {
      dev: {
        options: {
          urls: ['http://localhost:8080/test/dev/']
        }
      }
    },

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
          define: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      plugin: {
        src: ['doT.js']
      }
    },

    // regarde
    // --------
    regarde: {
      js: {
        files: ['**/*.js'],
        tasks: ['jshint']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-mocha');

  // Default task.
  grunt.registerTask('default', ['jshint', 'connect', 'regarde']);
  grunt.registerTask('test', ['jshint', 'connect', 'mocha']);

};
