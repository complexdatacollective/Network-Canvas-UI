'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint-disable react/require-default-props */

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

var isChecked = function isChecked(value, option) {
  return value ? !!value[option] : false;
};

var ToggleGroup = function ToggleGroup(_ref) {
  var options = _ref.options,
      colors = _ref.colors,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      errorText = _ref.errorText,
      tooltip = _ref.tooltip,
      toggleComponent = _ref.toggleComponent,
      onOptionClick = _ref.onOptionClick;

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
      errorText: errorText,
      tooltip: tooltip
    }),
    _react2.default.createElement(
      'div',
      { className: 'toggle-group__inputs' },
      (0, _lodash.map)(optionsWithColor, function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            option = _ref3[0],
            color = _ref3[1];

        return _react2.default.createElement(ToggleComponent, {
          key: option,
          name: name,
          label: option,
          color: color || null,
          onCheck: function onCheck(e, checked) {
            return onOptionClick(e, checked, option);
          },
          checked: isChecked(value, option)
        });
      })
    )
  );
};

ToggleGroup.propTypes = {
  errorText: _propTypes2.default.node,
  tooltip: _propTypes2.default.string,
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