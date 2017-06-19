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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 60" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Menu - CAT"
        ),
        _react2.default.createElement("circle", { className: "cls-1", cx: "11.14", cy: "11.14", r: "11.14" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M11.14 0a11.14 11.14 0 0 0-7.88 19L19 3.26A11.11 11.11 0 0 0 11.14 0z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "11.14", cy: "48.86", r: "11.14" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M11.14 37.71a11.14 11.14 0 0 0-7.88 19L19 41a11.11 11.11 0 0 0-7.86-3.29z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "48.86", cy: "48.86", r: "11.14" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M48.86 37.71a11.14 11.14 0 0 0-7.88 19L56.74 41a11.11 11.11 0 0 0-7.88-3.29z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "48.86", cy: "11.14", r: "11.14" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M48.86 0A11.14 11.14 0 0 0 41 19L56.74 3.26A11.11 11.11 0 0 0 48.86 0z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-cat.svg.react.js.map