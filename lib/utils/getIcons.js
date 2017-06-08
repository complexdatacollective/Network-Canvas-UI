'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
var fileList = require.context('../assets/img/icons', true, /(\.svg\.react\.js)$/);

var dictionary = {};
fileList.keys().forEach(function (x) {

  x = x.replace('./', '');
  dictionary[x.replace('.svg.react.js', '').toLowerCase()] = _typeof(require('../assets/img/icons/' + x)) === 'object' ? require('../assets/img/icons/' + x).default : require('../assets/img/icons/' + x);
});

exports.default = dictionary;
module.exports = exports['default'];
//# sourceMappingURL=getIcons.js.map