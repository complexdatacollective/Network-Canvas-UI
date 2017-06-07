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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      value: ''
    }, _this.handleChange = function (e) {
      _this.setState({ value: e.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          label = _props.label,
          placeholder = _props.placeholder;


      var inputLabelClassName = (0, _classnames2.default)({
        'input__label': true,
        'input__label--active': this.state.value
      });

      return _react2.default.createElement(
        'div',
        { className: 'input__container' },
        placeholder && _react2.default.createElement(
          'div',
          { className: 'input__placeholder' },
          placeholder
        ),
        _react2.default.createElement('input', {
          className: 'input',
          name: name,
          type: 'text',
          onChange: this.handleChange
        }),
        _react2.default.createElement(
          'label',
          { className: inputLabelClassName, htmlFor: name },
          label
        )
      );
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string
};
exports.default = TextInput;
module.exports = exports['default'];
//# sourceMappingURL=TextInput.js.map