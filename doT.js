
// requirejs-doT
// --------------
// This extremly simple requirejs plugin fetches doT templates
// using the requirejs-text plugin and makes them ready to use.

define(['doTCompiler', 'text'], function(doT, text) {

  'use strict';

  var buildMap = {};

  // ### [load](http://requirejs.org/docs/plugins.html#apiload)
  // loads the given module using requirejs-text.
  function load(name, req, onload, requireConfig, isBuild) {
    // if we've already compiled a version of that function, use that.
    if (isBuild && buildMap.hasOwnProperty(name)) {
      return onload(buildMap[name]);
    }

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
      // store it in the build map.
      buildMap[name] = template;
      // and provide it to the onLoad function.
      onload(template);
    });
  }

  // ### [write](http://requirejs.org/docs/plugins.html#apiwrite)
  // write is only used by the optimizer, and it only needs to be 
  // implemented if the plugin can output something that would belong in an 
  // optimized layer. It is called with the following arguments
  function write(pluginName, moduleName, writeFile) {
    if (buildMap.hasOwnProperty(moduleName)) {
      writeFile(
        "define('" + pluginName + "!" + moduleName + "',function(){return " + 
        buildMap[moduleName].toString() + ";});\n"
      );
    }
  }

  // expose public functions
  return {
    load: load,
    write: write
  };

});