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
          "Add A Context"
        ),
        _react2.default.createElement("circle", { className: "cls-1", cx: "112", cy: "128", r: "112" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "112", cy: "128", r: "112" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M156.88 89.93l-96.19 96.19h103.77a27.69 27.69 0 0 0 24-41.53z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M136 53.73a27.69 27.69 0 0 0-48 0l-52.44 90.86a27.69 27.69 0 0 0 24 41.53h1.15l96.19-96.19z" }),
        _react2.default.createElement("ellipse", { className: "cls-4", cx: "224.5", cy: "56", rx: "55.5", ry: "56" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M220.5 38h8v36h-8z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M206.5 60v-8h36v8z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M107.55 82.17a2.77 2.77 0 0 0 .74-2.81h7.42a2.77 2.77 0 0 0 .74 2.81z" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M112 55.29c-6.18 0-11.19 5.55-11.19 12.4a13.13 13.13 0 0 0 2.88 8.31l16.61-16.61a10.71 10.71 0 0 0-8.3-4.1z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M103.69 76a10.71 10.71 0 0 0 8.31 4.09c6.18 0 11.19-5.55 11.19-12.4a13.13 13.13 0 0 0-2.88-8.31z" }),
        _react2.default.createElement("path", { className: "cls-7", d: "M112 80.76c-9.21 0-16.68 7.14-16.68 16H104l14.63-14.63a17.28 17.28 0 0 0-6.63-1.37z" }),
        _react2.default.createElement("path", { className: "cls-8", d: "M118.65 82.08L104 96.71h24.66a16 16 0 0 0-10.01-14.63z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M151.92 156.15a2.77 2.77 0 0 0 .74-2.81h7.42a2.77 2.77 0 0 0 .74 2.81z" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M156.36 129.27c-6.18 0-11.19 5.55-11.19 12.4a13.13 13.13 0 0 0 2.88 8.31l16.61-16.61a10.71 10.71 0 0 0-8.3-4.1z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M148.06 150a10.71 10.71 0 0 0 8.31 4.09c6.18 0 11.19-5.55 11.19-12.4a13.13 13.13 0 0 0-2.88-8.31z" }),
        _react2.default.createElement("path", { className: "cls-7", d: "M156.36 154.73c-9.21 0-16.68 7.14-16.68 16h8.71L163 156.06a17.28 17.28 0 0 0-6.64-1.33z" }),
        _react2.default.createElement("path", { className: "cls-8", d: "M163 156.06l-14.63 14.63H173a16 16 0 0 0-10-14.63z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M63.19 156.15a2.77 2.77 0 0 0 .74-2.81h7.42a2.77 2.77 0 0 0 .74 2.81z" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M67.64 129.27c-6.18 0-11.19 5.55-11.19 12.4a13.13 13.13 0 0 0 2.88 8.33l16.61-16.61a10.71 10.71 0 0 0-8.3-4.12z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M59.33 150a10.71 10.71 0 0 0 8.31 4.09c6.18 0 11.19-5.55 11.19-12.4a13.13 13.13 0 0 0-2.88-8.31z" }),
        _react2.default.createElement("path", { className: "cls-7", d: "M67.64 154.73c-9.21 0-16.68 7.14-16.68 16h8.71L74.3 156.1a17.28 17.28 0 0 0-6.66-1.37z" }),
        _react2.default.createElement("path", { className: "cls-8", d: "M74.29 156.06l-14.63 14.63h24.66a16 16 0 0 0-10.03-14.63z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=add-a-context.svg.react.js.map