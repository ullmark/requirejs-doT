
require.config({
  paths: {
    dotCompiler: '../components/doT/doT',
    text: '../components/requirejs-text/text',
    doT: '../doT'
  }
});

define(function() {
  mocha.setup('bdd');

  describe("requirejs-doT", function() {
    it("does it", function(done) {
      require(['doT:template'], function(tmpl) {
        var html = tmpl({ heading: 'hello', text: 'world' });
        done();
      });
    });
  });

  mocha
    .globals([])
    .run();
});