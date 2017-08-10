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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasValue: false,
      isFocused: false
    }, _this.handleBlur = function (e) {
      _this.setState({ isFocused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    }, _this.handleFocus = function (e) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('value')) {
        var hasValue = Boolean(nextProps.value);
        if (nextProps.validator) {
          hasValue = nextProps.validator(nextProps.value);
        }
        this.setState({ hasValue: hasValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          errorText = _props.errorText,
          name = _props.name,
          label = _props.label,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['className', 'errorText', 'name', 'label', 'onChange', 'placeholder', 'value']);

      var inputLabelClassName = (0, _classnames2.default)({
        input__label: true,
        'input__label--active': this.state.hasValue
      });

      var showPlaceholder = this.state.isFocused && !this.state.hasValue ? placeholder : null;

      return _react2.default.createElement(
        'div',
        { className: 'input__container' },
        _react2.default.createElement('input', _extends({
          className: (0, _classnames2.default)(['input', className]),
          name: name,
          type: 'text',
          onBlur: this.handleBlur,
          onChange: onChange,
          onFocus: this.handleFocus,
          placeholder: showPlaceholder
        }, rest)),
        _react2.default.createElement(_InputLabel2.default, {
          active: this.state.hasValue,
          name: name,
          label: label,
          className: inputLabelClassName,
          errorText: errorText
        })
      );
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  className: _propTypes2.default.string,
  errorText: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  validator: _propTypes2.default.func,
  value: _propTypes2.default.any
};
exports.default = TextInput;
module.exports = exports['default'];
//# sourceMappingURL=TextInput.js.map