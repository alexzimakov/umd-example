(function() {
  'use strict';

  var greeting = new Greeting('Hello, <strong>UMD</strong>!');
  var paragraph = document.createElement('p');

  paragraph.innerHTML = greeting.getEscapedMesage();
  document.body.appendChild(paragraph);
})();
