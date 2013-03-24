
// requirejs-doT
// -------------
// This extremly simple requirejs plugin fetches doT templates
// using the requirejs-text plugin and makes them ready to use.

define(['text', './lib/doT'], function(text, doT) {

  // ### load
  // load
  var load = function(name, req, onload, config) {
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
    var func = "";
    write("define('" + pluginName + "!" + moduleName + 
      "', function() { return " + func + "; });")
  };

  // expose public functions
  return {
    load: load,
    writeFile: writeFile
  };

});