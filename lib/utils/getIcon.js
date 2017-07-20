'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = require('../assets/img/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIcon = function getIcon(name) {
  return _icons2.default[name];
}; /* eslint-disable import/no-dynamic-require, global-require */
exports.default = getIcon;
module.exports = exports['default'];
//# sourceMappingURL=getIcon.js.map