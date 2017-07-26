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

var InputLabel = function (_Component) {
  _inherits(InputLabel, _Component);

  function InputLabel() {
    _classCallCheck(this, InputLabel);

    return _possibleConstructorReturn(this, (InputLabel.__proto__ || Object.getPrototypeOf(InputLabel)).apply(this, arguments));
  }

  _createClass(InputLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          errorText = _props.errorText,
          name = _props.name,
          label = _props.label;


      var inputLabelClassName = (0, _classnames2.default)({
        'input__label': true,
        'input__label--active': this.props.active
      });

      var inputErrorClassName = (0, _classnames2.default)({
        'input__error': true,
        'input__error--active': this.props.active
      });

      return _react2.default.createElement(
        'label',
        { className: inputLabelClassName, htmlFor: name },
        label,
        errorText && _react2.default.createElement(
          'div',
          { className: inputErrorClassName },
          errorText
        )
      );
    }
  }]);

  return InputLabel;
}(_react.Component);

InputLabel.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  errorText: _propTypes2.default.node,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string
};
exports.default = InputLabel;
module.exports = exports['default'];
//# sourceMappingURL=InputLabel.js.map