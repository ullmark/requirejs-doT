
define(['doT!../persons'], function(tmpl) {

  describe("requirejs-doT", function() {
    
    it("loads and compiles the template", function() {
      var html = tmpl({
          persons: [
          { name: 'foo', age: 30 },
          { name: 'bar', age: 53 }
        ]
      });

      expect(html).to.eql('<ul> <li> <h2>foo</h2> <h3>30</h3> </li> <li> <h2>bar</h2> <h3>53</h3> </li></ul>');
    });
  });

});