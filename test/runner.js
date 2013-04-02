
// configure our modules
require.config({
  paths: {
    doTCompiler: '../components/doT/doT',
    text: '../components/requirejs-text/text',
    doT: '../doT'
  }
});

// require our tests and run them
define(['./doT_tests'], function() {
  mocha
    .globals([])
    .run();
});