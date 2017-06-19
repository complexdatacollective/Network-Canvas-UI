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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 70 70" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Menu - Custom Interface"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M19 0v5H0V0z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "18.5", cy: "2.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M5 19H0V0h5z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "2.5", cy: "18.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M70 19h-5V0h5z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "67.5", cy: "18.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M51 5V0h19v5z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "51.5", cy: "2.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M51 70v-5h19v5z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "51.5", cy: "67.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M65 51h5v19h-5z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "67.5", cy: "51.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M0 51h5v19H0z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "2.5", cy: "51.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M19 65v5H0v-5z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "18.5", cy: "67.5", r: "2.5" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M35 16.91l6.47 11.1 12.55 2.72-8.56 9.58 1.3 12.78L35 47.91l-11.76 5.18 1.3-12.78-8.56-9.58 12.55-2.72L35 16.91z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M41.47 28.01L35 16.91l-6.47 11.1-12.55 2.72 8.56 9.58-.58 5.73L41.9 28.1l-.43-.09z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-custom-interface.svg.react.js.map