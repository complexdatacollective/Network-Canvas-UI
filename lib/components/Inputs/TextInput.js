'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/require-default-props */

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyDown = function (e) {
      if (_this.props.isNumericOnly) {
        if (!(e.metaKey || // cmd/ctrl
        e.key in ['ArrowRight', 'ArrowLeft'] || // arrow keys
        e.which === 8 || // delete key
        /[0-9]/.test(String.fromCharCode(e.which)) // numbers
        )) {
          e.preventDefault();
        }
      }
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          errorText = _props.errorText,
          tooltip = _props.tooltip,
          name = _props.name,
          label = _props.label,
          onChange = _props.onChange,
          isNumericOnly = _props.isNumericOnly,
          hasFocus = _props.hasFocus,
          placeholder = _props.placeholder,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['className', 'errorText', 'tooltip', 'name', 'label', 'onChange', 'isNumericOnly', 'hasFocus', 'placeholder', 'value']);

      var showPlaceholder = hasFocus && !value ? placeholder : null;

      return _react2.default.createElement(
        'div',
        { className: 'input__container text__container' },
        _react2.default.createElement('input', _extends({
          className: (0, _classnames2.default)(['text', className]),
          name: name,
          type: isNumericOnly ? 'tel' : 'text',
          onChange: onChange,
          onKeyDown: this.handleKeyDown,
          placeholder: showPlaceholder,
          value: value
        }, rest)),
        _react2.default.createElement(_InputLabel2.default, {
          className: 'text__label',
          active: !!value,
          name: name,
          label: label,
          errorText: errorText,
          tooltip: tooltip
        })
      );
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  className: _propTypes2.default.string,
  errorText: _propTypes2.default.node,
  tooltip: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  isNumericOnly: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  hasFocus: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.any
};
exports.default = TextInput;
module.exports = exports['default'];
//# sourceMappingURL=TextInput.js.map