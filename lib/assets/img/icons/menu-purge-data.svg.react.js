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
          "Menu - Purge Data"
        ),
        _react2.default.createElement("rect", { className: "cls-1", x: "32.16", y: "21.58", width: "8", height: "8", rx: "3.95", ry: "3.95" }),
        _react2.default.createElement("rect", { className: "cls-1", x: "48.84", y: "14.58", width: "8", height: "8", rx: "3.95", ry: "3.95" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M46.81 70H13.19L5 26h50l-8.19 44z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M55 26l-8.19 44H13.19l-.81-4.38L52 26h3z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M3.661 11.995L54.502 1.513l1.85 8.97-50.84 10.483z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M56.34 10.49l-31.22 6.44L32.24 6.1l22.25-4.59 1.85 8.98z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "4.58", cy: "16.48", r: "4.58", transform: "rotate(-11.65 4.56 16.46)" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "55.42", cy: "6", r: "4.58", transform: "rotate(-11.65 55.446 6.003)" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M17.603 4.448L38.699.098l1.85 8.971-21.096 4.35z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M40.55 9.07l-11.88 2.45L35.83.69 38.7.1l1.85 8.97z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "18.53", cy: "8.93", r: "4.58", transform: "rotate(-11.65 18.551 8.925)" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "39.62", cy: "4.58", r: "4.58", transform: "rotate(-11.65 39.644 4.59)" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-purge-data.svg.react.js.map