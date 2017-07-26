'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioInput = function (_Component) {
  _inherits(RadioInput, _Component);

  function RadioInput() {
    _classCallCheck(this, RadioInput);

    return _possibleConstructorReturn(this, (RadioInput.__proto__ || Object.getPrototypeOf(RadioInput)).apply(this, arguments));
  }

  _createClass(RadioInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          className = _props.className,
          name = _props.name,
          label = _props.label,
          onChange = _props.onChange,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['checked', 'className', 'name', 'label', 'onChange', 'value']);

      return _react2.default.createElement(
        'div',
        { className: 'radio__container' },
        _react2.default.createElement('input', {
          type: 'radio',
          className: 'radio',
          checked: checked,
          value: value,
          onChange: this.props.onChange,
          name: name
        }),
        _react2.default.createElement(
          'label',
          { className: 'radio__label' },
          label || value
        )
      );
    }
  }]);

  return RadioInput;
}(_react.Component);

RadioInput.propTypes = {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  errorText: _propTypes2.default.node,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.any
};
exports.default = RadioInput;
module.exports = exports['default'];
//# sourceMappingURL=RadioInput.js.map