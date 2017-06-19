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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 66 60" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Contexts - Cerulean"
        ),
        _react2.default.createElement("circle", { className: "cls-1", cx: "33", cy: "9.4", r: "9.4" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "9.4", cy: "50.6", r: "9.4" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "56.6", cy: "50.6", r: "9.4" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M47.36 15.52L4.53 58.51.97 46.45 24.84 4.72h16.31l6.21 10.8z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M47.36 15.52L4.45 58.59 9.43 60h47.14l8.15-14.24-17.36-30.24z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "33", cy: "20.54", r: "7.5" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M33 13a7.5 7.5 0 0 0-5.3 12.8l10.6-10.56A7.48 7.48 0 0 0 33 13z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "20.36", cy: "44.98", r: "7.5" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M20.36 37.48a7.5 7.5 0 0 0-5.3 12.8l10.6-10.6a7.48 7.48 0 0 0-5.3-2.2z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "45.64", cy: "44.98", r: "7.5" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M45.64 37.48a7.5 7.5 0 0 0-5.3 12.8l10.6-10.6a7.48 7.48 0 0 0-5.3-2.2z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=contexts.svg.react.js.map