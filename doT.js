
// requirejs-doT
// --------------
// This extremly simple requirejs plugin fetches doT templates
// using the requirejs-text plugin and makes them ready to use.

define(['dotCompiler', 'text'], function(doT, text) {

  // ### load
  function load(name, req, onload, requireConfig) {
    var config = requireConfig.doT || {};
    var fileName = name + (config.ext || '.dot');

    // pass in the settings
    if (config.templateSettings) {
      for (var option in config.templateSettings) {
        doT.templateSettings[option] = config.templateSettings[option];
      }
    }

    // get the template with [requirejs-text](https://github.com/requirejs/text)
    text.get(req.toUrl(fileName), function(tmplData) {
      // compile the template with doT.
      var template = doT.template(tmplData);
      // and provide it to the onLoad function.
      onload(template);
    });
  }

  // ### write
  // used by the optimizer.
  function write(pluginName, moduleName, writeFile) {
    var func = doT.template('');
    writeFile("define('" + pluginName + "!" + moduleName + "'," + func.toString() + ");");
  }

  // expose public functions
  return {
    load: load,
    write: write
  };

});