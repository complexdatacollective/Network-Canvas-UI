'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _CheckboxGroup2 = require('./CheckboxGroup');

var _CheckboxGroup3 = _interopRequireDefault(_CheckboxGroup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  * A togglable list that sets thes field value to a key/value object of boolean properties
  */
var ToggleGroup = function (_CheckboxGroup) {
  _inherits(ToggleGroup, _CheckboxGroup);

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
          meta = _props.meta,
          _props$input = _props.input,
          name = _props$input.name,
          value = _props$input.value;


      var optionsWithColor = colors ? (0, _lodash.zip)(options, colors) : (0, _lodash.map)(options, function (option, index) {
        return [option, index];
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          label
        ),
        _react2.default.createElement(
          'div',
          null,
          (0, _lodash.map)(optionsWithColor, function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                option = _ref2[0],
                color = _ref2[1];

            return _react2.default.createElement(
              'div',
              { key: option },
              _react2.default.createElement(
                'label',
                { htmlFor: name + '_' + option, className: 'toggle-group__item toggle-group__item--palette-' + color },
                _react2.default.createElement('input', {
                  type: 'checkbox',
                  id: name + '_' + option,
                  name: name,
                  value: option,
                  checked: value[option],
                  onClick: function onClick() {
                    _this2.onClickOption(option);
                  }
                }),
                ' ',
                option
              )
            );
          })
        ),
        meta.invalid && _react2.default.createElement(
          'div',
          null,
          meta.error
        )
      );
    }
  }]);

  return ToggleGroup;
}(_CheckboxGroup3.default);

exports.default = ToggleGroup;
module.exports = exports['default'];
//# sourceMappingURL=ToggleGroup.js.map