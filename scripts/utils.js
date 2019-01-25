(function(global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else {
    // Глобальная переменная (если скрипт выполняется в браузере, тогда это будет `window`)
    global.utils = factory();
  }
})(this, function() {
  'use strict';

  // приватные свойства и методы
  var htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  var capitalize = function(value) {
    var words = value.split(' ');

    return words
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  };

  var escape = function(value) {
    var chars = value.split('');

    return chars
      .map(function(char) {
        return htmlEntities[char] || char;
      })
      .join('');
  };

  return {
    capitalize: capitalize,
    escape: escape,
  };
});
