'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Expandable = function Expandable(_ref) {
  var open = _ref.open,
      children = _ref.children,
      className = _ref.className;

  var classes = (0, _classnames2.default)(className, 'expandable', { 'expandable--open': open });

  return _react2.default.createElement(
    'div',
    { className: classes },
    children
  );
};

Expandable.propTypes = {
  open: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  children: _propTypes2.default.any
};

Expandable.defaultProps = {
  open: false,
  className: null,
  children: null
};

exports.default = Expandable;
module.exports = exports['default'];
//# sourceMappingURL=Expandable.js.map