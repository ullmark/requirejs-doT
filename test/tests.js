
require.config({
  paths: {
    text: '../components/requirejs-text/text'
  }
});

define(function() {
  mocha.setup('bdd');

  describe("requirejs-doT", function() {
    it("does it");
  });

  mocha
    .globals([])
    .run();
});