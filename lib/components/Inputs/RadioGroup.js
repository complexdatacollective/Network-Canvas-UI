'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _RadioInput = require('./RadioInput');

var _RadioInput2 = _interopRequireDefault(_RadioInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = function (_Component) {
  _inherits(RadioGroup, _Component);

  function RadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyDown = function (e) {
      var children = _this.props.children;

      var currentIndex = [].concat(_toConsumableArray(e.currentTarget.children)).indexOf(e.target);
      switch (e.key) {
        case 'Enter':
          {
            _this.props.onChange(children[currentIndex].props.value);
            break;
          }
        case 'ArrowRight':
        case 'ArrowDown':
          {
            var nextIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1;
            _this.props.onChange(children[nextIndex].props.value);
            break;
          }

        case 'ArrowLeft':
        case 'ArrowUp':
          {
            var prevIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
            _this.props.onChange(children[prevIndex].props.value);
            break;
          }
        default:
          {
            break;
          }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          errorText = _props.errorText,
          name = _props.name,
          label = _props.label,
          onRadioClick = _props.onRadioClick,
          options = _props.options,
          value = _props.value,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'errorText', 'name', 'label', 'onRadioClick', 'options', 'value']);

      return _react2.default.createElement(
        'div',
        { className: 'radio-group__container', onKeyDown: this.handleKeyDown },
        _react2.default.createElement(
          'div',
          { className: 'grid__stack' },
          options ? options.map(function (option, idx) {
            return _react2.default.createElement(_RadioInput2.default, {
              key: idx,
              onChange: onRadioClick,
              checked: value === option,
              name: name,
              value: option
            });
          }) : _react2.default.Children.map(children, function (child) {
            if (child.type === _RadioInput2.default) {
              return _react2.default.cloneElement(child, {
                name: name,
                checked: child.props.value === value,
                onChange: onRadioClick
              });
            }
            return child;
          })
        ),
        _react2.default.createElement(_InputLabel2.default, {
          name: name,
          label: label,
          errorText: errorText
        })
      );
    }
  }]);

  return RadioGroup;
}(_react.Component);

RadioGroup.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  errorText: _propTypes2.default.node,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onRadioClick: _propTypes2.default.func,
  options: _propTypes2.default.array,
  value: _propTypes2.default.any
};
exports.default = RadioGroup;
module.exports = exports['default'];
//# sourceMappingURL=RadioGroup.js.map