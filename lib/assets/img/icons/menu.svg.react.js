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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 70" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Menu"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M75 0H45L35 10h40a5 5 0 0 0 0-10z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M5 0a5 5 0 0 0 0 10h30L45 0z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "75", cy: "5", r: "5" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "5", cy: "5", r: "5" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M5 0h70v10H5z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M45 0h30v10H35L45 0zM75 60H45L35 70h40a5 5 0 0 0 0-10z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M5 60a5 5 0 0 0 0 10h30l10-10z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "75", cy: "65", r: "5" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "5", cy: "65", r: "5" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M5 60h70v10H5z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M45 60h30v10H35l10-10zM75 30H45L35 40h40a5 5 0 0 0 0-10z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M5 30a5 5 0 0 0 0 10h30l10-10z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "75", cy: "35", r: "5" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "5", cy: "35", r: "5" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M5 30h70v10H5z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M45 30h30v10H35l10-10z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu.svg.react.js.map