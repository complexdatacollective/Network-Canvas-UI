'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-param-reassign */

var textOutOfBounds = function textOutOfBounds(containerElement, textElement) {
  var containerBounds = containerElement.getBoundingClientRect();
  var textBounds = textElement.getBoundingClientRect();
  return textBounds.height > containerBounds.height || textBounds.width > containerBounds.width;
};

var scaleIncrement = 1;

// TODO move padding: 33% into stylesheet
var scaleTextToFit = function scaleTextToFit(element) {
  element.setAttribute('style', 'position: relative;');
  var text = element.textContent;
  element.innerHTML = '';

  var textElement = document.createElement('span');
  textElement.innerHTML = text;
  element.appendChild(textElement);

  var findFontSize = function findFontSize(size) {
    textElement.setAttribute('style', 'position: absolute; font-size: ' + size + 'px;');

    return !textOutOfBounds(element, textElement) ? findFontSize(size + scaleIncrement) : size - scaleIncrement;
  };

  var fontSize = findFontSize(8);

  element.innerHTML = text;
  element.setAttribute('style', 'font-size: ' + fontSize + 'px; overflow: hidden;');
};

exports.default = scaleTextToFit;
module.exports = exports['default'];
//# sourceMappingURL=scaleTextToFit.js.map