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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 70" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Arrow Left"
        ),
        _react2.default.createElement("rect", { className: "cls-2", x: "17.2", y: "33.4", width: "29.7", height: "7" }),
        _react2.default.createElement("polygon", { className: "cls-2", points: "31,40.4 24,33.4 46.9,33.4 46.9,40.4 \t" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "46.9", cy: "36.9", r: "3.5" }),
        _react2.default.createElement("rect", { className: "cls-2", x: "16.4", y: "31.2", transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -24.2242 26.449)", width: "6.8", height: "22.6" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "27.8", cy: "50.5", r: "3.4" }),
        _react2.default.createElement("rect", { className: "cls-2", x: "14.3", y: "25.5", transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -13.9205 24.1777)", width: "15.8", height: "6.8" }),
        _react2.default.createElement("rect", { className: "cls-2", x: "19.4", y: "23.4", transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -11.8053 25.0549)", width: "9.8", height: "6.8" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "27.8", cy: "23.3", r: "3.4" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=arrow-left.svg.react.js.map