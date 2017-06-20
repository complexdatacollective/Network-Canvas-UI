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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 280 240" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Add A Screen"
        ),
        _react2.default.createElement("circle", { className: "cls-1", cx: "112", cy: "128", r: "112" }),
        _react2.default.createElement("ellipse", { className: "cls-2", cx: "224.5", cy: "56", rx: "55.5", ry: "56" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M220.5 38h8v36h-8z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M206.5 60v-8h36v8z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M70.57 78h20v100h-20z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M62 86.57h15.71v82.86H62zM82 86.57h17.14v82.86H82z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M99.14 169.43H82v-45.72l17.14-17.14v62.86z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "90.57", cy: "86.57", r: "8.57" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "70.57", cy: "86.57", r: "8.57" }),
        _react2.default.createElement("circle", { className: "cls-4", cx: "70.57", cy: "169.43", r: "8.57" }),
        _react2.default.createElement("circle", { className: "cls-4", cx: "90.57", cy: "169.43", r: "8.57" }),
        _react2.default.createElement("circle", { className: "cls-5", cx: "142", cy: "98", r: "20" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M142 78a20 20 0 0 0-14.14 34.14l28.28-28.28A19.94 19.94 0 0 0 142 78z" }),
        _react2.default.createElement("circle", { className: "cls-5", cx: "142", cy: "158", r: "20" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M142 138a20 20 0 0 0-14.14 34.14l28.28-28.28A19.94 19.94 0 0 0 142 138z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M90.57 178h-20v-42.86l20-20V178z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M77.71 169.43H62v-25.72L77.71 128v41.43z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=add-a-screen.svg.react.js.map