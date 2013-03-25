
// requirejs-doT
// -------------
// This extremly simple requirejs plugin fetches doT templates
// using the requirejs-text plugin and makes them ready to use.

define(function() {

  // ### load
  var load = function(name, req, onload, config) {
    var text = req('text');
    var fileName = name;

    // get the template 
    text.get(req.toUrl(fileName), function(tmplData) {
      // compile the template with doT.
      var template = doT.template(tmplData);
      // and provide it to the onLoad function.
      onload(template);
    });
  },

  // ### write
  // used by the optimizer.
  write: function(pluginName, moduleName, write) {
    var func = dot.template('');
    write("define('" + pluginName + "!" + moduleName + "'," + func.toString() + ");");
  };

  // expose public functions
  return {
    load: load,
    write: write
  };

});