"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 500 160" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Primary Button"
        ),
        _react2.default.createElement("circle", { className: "cls-1", cx: "80", cy: "80", r: "80" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "420", cy: "80", r: "80" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M80 0h340v160H80z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "417.16", cy: "80", r: "3.02" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M450.147 80.005l-4.172 4.172-13.803-13.803 4.172-4.171z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "434.25", cy: "68.28", r: "2.95", transform: "rotate(-45 434.251 68.277)" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M436.342 93.801l-4.172-4.171 9.645-9.645 4.172 4.172z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "434.25", cy: "91.72", r: "2.95", transform: "rotate(-45 434.26 91.714)" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M417.16 83.02v-6.04h27.39v6.04z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=primary-button.svg.react.js.map