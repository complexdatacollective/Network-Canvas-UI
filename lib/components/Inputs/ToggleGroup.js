'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _ContextInput = require('./ContextInput');

var _ContextInput2 = _interopRequireDefault(_ContextInput);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ToggleInput = require('./ToggleInput');

var _ToggleInput2 = _interopRequireDefault(_ToggleInput);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isChecked = function isChecked(value, option) {
  return value ? !!value[option] : false;
};

var ToggleGroup = function (_Component) {
  _inherits(ToggleGroup, _Component);

  function ToggleGroup() {
    _classCallCheck(this, ToggleGroup);

    return _possibleConstructorReturn(this, (ToggleGroup.__proto__ || Object.getPrototypeOf(ToggleGroup)).apply(this, arguments));
  }

  _createClass(ToggleGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          colors = _props.colors,
          label = _props.label,
          name = _props.name,
          value = _props.value,
          errorText = _props.errorText,
          toggleComponent = _props.toggleComponent;


      var optionsWithColor = colors ? (0, _lodash.zip)(options, colors) : (0, _lodash.map)(options, function (option, index) {
        return [option, index];
      });

      var ToggleComponent = _ToggleInput2.default;
      if (toggleComponent === 'checkbox') {
        ToggleComponent = _Checkbox2.default;
      } else if (toggleComponent === 'context') {
        ToggleComponent = _ContextInput2.default;
      }

      return _react2.default.createElement(
        'div',
        { className: 'toggle-group' },
        _react2.default.createElement(_InputLabel2.default, {
          name: name,
          label: label,
          errorText: errorText
        }),
        _react2.default.createElement(
          'div',
          { className: 'toggle-group__inputs' },
          (0, _lodash.map)(optionsWithColor, function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                option = _ref2[0],
                color = _ref2[1];

            return _react2.default.createElement(ToggleComponent, {
              key: option,
              name: name,
              label: option,
              color: color || null,
              onCheck: function onCheck(e, checked) {
                return _this2.props.onOptionClick(e, checked, option);
              },
              checked: isChecked(value, option)
            });
          })
        )
      );
    }
  }]);

  return ToggleGroup;
}(_react.Component);

ToggleGroup.propTypes = {
  errorText: _propTypes2.default.node,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onOptionClick: _propTypes2.default.func,
  value: _propTypes2.default.any,
  options: _propTypes2.default.array.isRequired,
  colors: _propTypes2.default.array,
  toggleComponent: _propTypes2.default.oneOf(['toggle', 'checkbox', 'context'])
};
exports.default = ToggleGroup;
module.exports = exports['default'];
//# sourceMappingURL=ToggleGroup.js.map