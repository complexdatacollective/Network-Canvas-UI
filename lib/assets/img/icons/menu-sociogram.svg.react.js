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
          "Menu - Sociogram"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M18.741 42.178l14.996-23.004 2.514 1.638-14.996 23.004z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M33.74 20.818l2.512-1.638 15 23-2.513 1.64z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M20 42h30v3H20z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M35 4A31 31 0 1 1 4 35 31 31 0 0 1 35 4m0-4a35 35 0 1 0 35 35A35 35 0 0 0 35 0z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "35", cy: "20.5", r: "7.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M35 13a7.5 7.5 0 0 0-5.3 12.8l10.6-10.6A7.48 7.48 0 0 0 35 13z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "20.5", cy: "43.5", r: "7.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M20.5 36a7.5 7.5 0 0 0-5.3 12.8l10.6-10.6a7.48 7.48 0 0 0-5.3-2.2z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "49.5", cy: "43.5", r: "7.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M49.5 36a7.5 7.5 0 0 0-5.3 12.8l10.6-10.6a7.48 7.48 0 0 0-5.3-2.2z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-sociogram.svg.react.js.map