require.js [doT][] plugin
=========================

This plugins loads dot-templates with [require-text][] during development, and has the capabilities 
to build dependency free optimized versions with [r.js](http://requirejs.org/docs/optimization.html)

Usage
----------------------
Create your template: `persons.dot`

```html
<ul>
{{~ it.persons :person }}
  <li>
    <h2>{{= person.name }}</h2>
    <h3>{{= person.age }}</h3>
  </li>
{{~}}
</ul>
```

Use it:
```javascript
define(['doT!persons'], function(tmpl) {
  var data = {
    persons: [
      { name: 'foo', age: 30 },
      { name: 'bar', age: 53 }
    ]
  };

  var html = tmpl(data);
});
```

Installation & Dependencies
---------------------------
  - [doT][] 
  - [require-text][]

Install with [bower][] to get them all. You can also manually 
download `doT.js` or clone this repository and get the dependencies in whatever way you 
see fit.

```
bower install requirejs-doT
```

In your [paths](http://requirejs.org/docs/api.html#config-paths) setup the mappings 
to the dependencies (change to fit your setup).

```javascript
require.config({
  paths: {
    doTCompiler:  'components/doT/doT',
    text:         'components/requirejs-text/text',
    doT:          'components/requirejs-dot/doT'
  }
});
```

Config
-------------------
templateSettings are passed into [doT][].templateSettings.

```javascript
require.config({
  doT: {
    ext: '.dot', // extension of the templates, defaults to .dot
    templateSettings: {
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
  }
});
```

Optimized
-----------------------
In a optimized build, the templates is defined as compiled 
[doT][] function. So in optimized mode it doesn't really have dependencies 
at all, not even [doT][].

The optimized version of the `persons.dot` template above.

```javascript
define("doT!persons",function(){return function(t){var n="<ul>",r=t.persons;if(r){var i,s=-1,o=r.length-1;while(s<o)i=r[s+=1],n+=" <li> <h2>"+i.name+"</h2> <h3>"+i.age+"</h3> </li>"}return n+="</ul>",n}})
```

If your application doesn't use [require-text][] or [doT][] somewhere else, you can go ahead and 
stub them from the build by using [stubModules](https://github.com/jrburke/r.js/blob/master/build/example.build.js#L295-L308) in your build.

```javascript
stubModules: ['doTCompiler', 'text', 'doT']
```

Pitfalls
-------------
  - Remember to make sure your webserver can serve `.dot`-files during development (Or whatever extension you choose).
  - Optimizing isn't tested for Rhino yet...

Todo
-------------
Figure out more ways to test

## License 

(The MIT License)

Copyright (c) 2013 Markus Ullmark

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[doT]: http://olado.github.com/doT/
[require-text]: https://github.com/requirejs/text
[bower]: http://twitter.github.com/bower/