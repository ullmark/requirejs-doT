
define(['dot!template'], function(tmpl) {

  describe("requirejs-doT", function() {
    it("loads and compiles the template", function() {
      var html = tmpl({ heading: 'Hello', text: 'World!' });
      expect(html).to.eql('<h2>Hello</h2><p>World!</p>');
    });
  });

});