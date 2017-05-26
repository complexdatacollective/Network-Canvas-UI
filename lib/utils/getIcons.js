'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
var fileList = require.context('../assets/img/icons', true, /[\s\S]*$/);

var dictionary = {};
fileList.keys().forEach(function (x) {
  x = x.replace('./', '');
  dictionary[x.replace('.svg', '').toLowerCase()] = require('../assets/img/icons/' + x).default;
});

exports.default = dictionary;
module.exports = exports['default'];
//# sourceMappingURL=getIcons.js.map