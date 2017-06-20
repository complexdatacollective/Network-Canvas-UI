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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 94" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Edit - Blue"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M53.545 10.772l7.071 7.07L10.61 67.85l-7.071-7.07z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M60.615 17.84l7.071 7.071L17.68 74.918l-7.071-7.071z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "73.46", cy: "13.49", r: "5", transform: "rotate(-45 73.467 13.489)" }),
        _react2.default.createElement("circle", { className: "cls-4", cx: "64.98", cy: "5", r: "5", transform: "rotate(-45 64.979 4.995)" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M69.227 9.24l7.778 7.778-8.683 8.684-7.778-7.779z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M61.447 1.458l7.778 7.778-8.683 8.683-7.778-7.778z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M72.757 5.715L77 9.957 66.902 20.055l-4.242-4.243z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M68.517 1.454l4.243 4.243-10.098 10.097-4.242-4.242z" }),
        _react2.default.createElement("circle", { className: "cls-5", cx: "53.46", cy: "10.86", r: "3", transform: "rotate(-45 53.457 10.857)" }),
        _react2.default.createElement("circle", { className: "cls-5", cx: "67.61", cy: "25", r: "3", transform: "rotate(-45 67.608 25.006)" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M55.583 8.737L69.725 22.88l-4.243 4.243L51.34 12.98z" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M3.537 60.779l7.071 7.07-3.019 3.02-7.07-7.071z" }),
        _react2.default.createElement("path", { className: "cls-7", d: "M10.617 67.847l7.071 7.071-3.019 3.02-7.07-7.071zM0 78.46l14.67-.52-7.08-7.07L0 78.46z" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M0 78.46L.52 63.8l7.07 7.07L0 78.46z" }),
        _react2.default.createElement("circle", { className: "cls-8", cx: "1.61", cy: "85.18", r: "1.61" }),
        _react2.default.createElement("circle", { className: "cls-8", cx: "60.51", cy: "85.18", r: "1.61" }),
        _react2.default.createElement("circle", { className: "cls-8", cx: "78.39", cy: "85.18", r: "1.61" }),
        _react2.default.createElement("circle", { className: "cls-8", cx: "70.71", cy: "85.18", r: "1.61" }),
        _react2.default.createElement("path", { className: "cls-8", d: "M70.71 83.57h7.68v3.22h-7.68zM1.61 83.57h58.9v3.22H1.61z" }),
        _react2.default.createElement("circle", { className: "cls-8", cx: "11.61", cy: "92.39", r: "1.61" }),
        _react2.default.createElement("circle", { className: "cls-8", cx: "50.51", cy: "92.39", r: "1.61" }),
        _react2.default.createElement("path", { className: "cls-8", d: "M11.61 90.78h38.9V94h-38.9z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=edit.svg.react.js.map