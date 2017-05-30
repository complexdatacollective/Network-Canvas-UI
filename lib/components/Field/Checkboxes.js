'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * A list of checkboxes, not intended for direct use
  */
var Checkboxes = function Checkboxes(_ref) {
  var name = _ref.name,
      options = _ref.options,
      onClickOption = _ref.onClickOption;
  return _react2.default.createElement(
    'div',
    null,
    (0, _lodash.map)(options, function (value, option) {
      return _react2.default.createElement(
        'div',
        { key: option },
        _react2.default.createElement(
          'label',
          { htmlFor: name + '_' + option },
          _react2.default.createElement('input', {
            type: 'checkbox',
            id: name + '_' + option,
            name: name,
            value: option,
            checked: value,
            onClick: function onClick() {
              onClickOption(option);
            }
          }),
          ' ',
          option
        )
      );
    })
  );
};

Checkboxes.propTypes = {
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired,
  onClickOption: _propTypes2.default.func.isRequired
};

exports.default = Checkboxes;
module.exports = exports['default'];
//# sourceMappingURL=Checkboxes.js.map