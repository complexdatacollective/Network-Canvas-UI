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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 120 140" }, this.props),
        _react2.default.createElement("rect", { className: "cls-1", x: "64.33", y: "43.16", width: "16", height: "16", rx: "7.91", ry: "7.91" }),
        _react2.default.createElement("rect", { className: "cls-1", x: "97.68", y: "29.16", width: "16", height: "16", rx: "7.91", ry: "7.91" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M93.62 140H26.38L10 52h100l-16.38 88z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M110 52l-16.38 88H26.38l-1.62-8.76L104 52h6z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M7.313 23.992L108.994 3.027l3.7 17.943L11.012 41.935z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M112.69 20.97L50.24 33.85l14.24-21.64 44.51-9.18 3.7 17.94z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "9.16", cy: "32.97", r: "9.16", transform: "rotate(-11.65 9.165 32.975)" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "110.84", cy: "12", r: "9.16", transform: "rotate(-11.65 110.843 12.001)" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M35.204 8.888l42.193-8.7 3.7 17.943-42.193 8.7z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M81.1 18.13l-23.76 4.9L71.65 1.38 77.4.19l3.7 17.94z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "37.05", cy: "17.86", r: "9.16", transform: "rotate(-11.65 37.054 17.844)" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "79.25", cy: "9.16", r: "9.16", transform: "rotate(-11.65 79.24 9.173)" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=trash-bin.svg.react.js.map