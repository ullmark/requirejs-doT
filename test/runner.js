
// configure our modules
require.config({
  paths: {
    dotCompiler: '../components/doT/doT',
    text: '../components/requirejs-text/text',
    dot: '../doT'
  }
});

// require our tests and run them
define(['./doT_tests'], function() {
  mocha
    .globals([])
    .run();
});