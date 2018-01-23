'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-param-reassign */

// The window width and heights are just an arbitrary upper limit
var textOutOfBounds = function textOutOfBounds(containerElement, textElement) {
  var containerBounds = containerElement.getBoundingClientRect();
  var textBounds = textElement.getBoundingClientRect();
  return textBounds.height > containerBounds.height || textBounds.width > containerBounds.width;
};

var defaultOptions = {
  increment: 1,
  units: 'px'
};

// TODO move padding: 33% into stylesheet
var scaleTextToFit = function scaleTextToFit(element, options) {
  var _defaultOptions$optio = _extends({}, defaultOptions, options),
      increment = _defaultOptions$optio.increment,
      unit = _defaultOptions$optio.unit;

  element.setAttribute('style', 'position: relative;');
  var text = element.textContent;
  element.innerHTML = '';

  var textElement = document.createElement('span');
  textElement.innerHTML = text;
  element.appendChild(textElement);

  var findFontSize = function findFontSize(size) {
    textElement.setAttribute('style', 'position: absolute; font-size: ' + size + unit + ';');

    return !textOutOfBounds(element, textElement) ? findFontSize(size + increment) : size - increment;
  };

  var fontSize = findFontSize(0);

  element.innerHTML = text;
  element.setAttribute('style', 'font-size: ' + fontSize + unit + '; overflow: hidden;');
};

exports.default = scaleTextToFit;
module.exports = exports['default'];
//# sourceMappingURL=scaleTextToFit.js.map