
define(['doT!./persons'], function(tmpl) {
  return tmpl({
    persons: [
      { name: 'Minsc', age: 35 },
      { name: 'Boo', age: 2 }
    ]
  });
});