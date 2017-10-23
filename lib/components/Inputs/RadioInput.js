'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/require-default-props */

var RadioInput = function RadioInput(_ref) {
  var checked = _ref.checked,
      name = _ref.name,
      label = _ref.label,
      onChange = _ref.onChange,
      value = _ref.value;
  return _react2.default.createElement(
    'div',
    { className: 'radio__container' },
    _react2.default.createElement('input', {
      type: 'radio',
      className: 'radio',
      checked: checked,
      value: value,
      onChange: onChange,
      name: name
    }),
    _react2.default.createElement(
      'label',
      { className: 'radio__label', htmlFor: name },
      label || value
    )
  );
};

RadioInput.propTypes = {
  checked: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  label: _propTypes2.default.string,
  value: _propTypes2.default.any
};

exports.default = RadioInput;
module.exports = exports['default'];
//# sourceMappingURL=RadioInput.js.map