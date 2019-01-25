// Модуль `Greeting` зависит от модуля `utils`

(function(global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    var utils = require('utils');

    module.exports = factory(utils);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['utils'], factory);
  } else {
    // Глобальная переменная (если скрипт выполняется в браузере, тогда это будет `window`)
    global.Greeting = factory(global.utils);
  }
})(this, function(utils) {
  'use strict';

  function Greeting(message) {
    this.message = message;
  }

  Greeting.prototype.getPrettyMessage = function() {
    return utils.capitalize(this.message);
  };

  Greeting.prototype.getEscapedMesage = function() {
    return utils.escape(this.message);
  };

  return Greeting;
});
