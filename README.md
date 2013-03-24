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

Installation
----------------------
Download or Clone this repository. Or use [bower][]

```
bower install requirejs-dot
```

To make it available in every module, map it in require.js config

```javascript
map: {
  '*': {
    'doT': 'requirejs-dot/dot'
  }
}
```

Optimized
-----------------------
In a optimized build, the templates is defined as compiled 
[doT][] function. 

[doT]: http://olado.github.com/doT/
[bower]: http://twitter.github.com/bower/