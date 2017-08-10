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

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isChecked: false
    }, _this.handleCheck = function (event) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, _this.isChecked());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var checked = this.props.checked;

      if (checked) {
        this.setState({
          isChecked: true
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasCheckedProp = nextProps.hasOwnProperty('checked');
      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

      if (hasCheckedProp || hasNewDefaultProp) {
        var isChecked = nextProps.checked || nextProps.defaultChecked || false;

        this.setState({ isChecked: isChecked });
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.checkbox.checked; // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          className = _props.className,
          errorText = _props.errorText,
          name = _props.name,
          label = _props.label,
          onCheck = _props.onCheck,
          isChecked = _props.isChecked,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['checked', 'className', 'errorText', 'name', 'label', 'onCheck', 'isChecked', 'value']);

      return _react2.default.createElement(
        'div',
        { className: 'checkbox__container' },
        _react2.default.createElement('input', _extends({
          className: (0, _classnames2.default)(['checkbox', className]),
          name: name,
          type: 'checkbox',
          ref: 'checkbox',
          checked: this.state.isChecked,
          onChange: this.handleCheck,
          value: value
        }, rest)),
        _react2.default.createElement(_InputLabel2.default, {
          name: name,
          label: label,
          errorText: errorText
        })
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  errorText: _propTypes2.default.node,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onCheck: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  validator: _propTypes2.default.func,
  value: _propTypes2.default.any
};
exports.default = Checkbox;
module.exports = exports['default'];
//# sourceMappingURL=Checkbox.js.map