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

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/require-default-props */

var InputLabel = function InputLabel(_ref) {
  var active = _ref.active,
      className = _ref.className,
      errorText = _ref.errorText,
      name = _ref.name,
      label = _ref.label,
      tooltip = _ref.tooltip;

  var inputLabelClassName = (0, _classnames2.default)({
    input__label: true,
    'input__label--active': active
  }, [className]);

  var inputErrorClassName = (0, _classnames2.default)({
    input__error: true,
    'input__error--active': active
  });

  var wrapperClassName = (0, _classnames2.default)({
    'input__tooltip-right': tooltip === 'right',
    'input__tooltip-bottom': tooltip === 'bottom'
  });

  return _react2.default.createElement(
    'div',
    { className: wrapperClassName },
    _react2.default.createElement(
      'label',
      { className: inputLabelClassName, htmlFor: name },
      label
    ),
    errorText && _react2.default.createElement(
      'div',
      { className: inputErrorClassName },
      tooltip && _react2.default.createElement(_.Icon, { name: 'error' }),
      _react2.default.createElement(
        'div',
        { className: 'input__error-text' },
        tooltip && _react2.default.createElement(
          'h4',
          null,
          'Error!'
        ),
        _react2.default.createElement(
          'h4',
          null,
          errorText
        )
      )
    )
  );
};

InputLabel.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  errorText: _propTypes2.default.node,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  tooltip: _propTypes2.default.string
};

exports.default = InputLabel;
module.exports = exports['default'];
//# sourceMappingURL=InputLabel.js.map