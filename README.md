require.js [doT][] plugin
=========================
**Note:** initial version to be released shortly...

This plugins loads dot-templates during development, and has the capabilities 
to build optimized versions.

Usage
----------------------
Create your template: `person.dot`

```
<h2>{{=it.name}}</h2>
<h3>{{=it.age}}</h3>
```

Use it:
```javascript
define(['doT!person'], function(tmpl) {
  var html = tmpl({ name: 'Lasse Kongo', age: 45 });
});
```

Configure a template:
```
require.config({
  config: {
    'person': {

    }
  } 
});
```

Installation & Dependencies
---------------------------
  - [doT][]
  - [require-text][] (for development)

Install with [bower][] to get them all. You can also manually 
download or clone this repository and get the dependencies in whatever way you 
see fit.

```
bower install requirejs-dot
```

In your [paths](http://requirejs.org/docs/api.html#config-paths) setup the mappings 
to the dependencies (change to fit your setup).

```javascript
require.config({
  paths: {
    doTCompiler: 'components/doT/doT',
    text: 'components/requirejs-text/text',
    doT: 'components/requirejs-dot/doT'
  }
});
```

Config
-------------------
configuration are passed into doT.templateSettings.

```javascript
require.config({
  doT: {
    evaluate:    /\{\{([\s\S]+?)\}\}/g,
    interpolate: /\{\{=([\s\S]+?)\}\}/g,
    encode:      /\{\{!([\s\S]+?)\}\}/g,
    use:         /\{\{#([\s\S]+?)\}\}/g,
    define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
    conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
    iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
    varname: 'it',
    strip: true,
    append: true,
    selfcontained: false
  }
});
```


Optimized
-----------------------
In a optimized build, the templates is defined as compiled 
[doT][] function. 

[doT]: http://olado.github.com/doT/
[bower]: http://twitter.github.com/bower/