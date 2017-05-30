'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = Checkboxes;
module.exports = exports['default'];
//# sourceMappingURL=Checkboxes.js.map