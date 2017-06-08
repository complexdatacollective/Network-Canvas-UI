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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 180 160" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Warning"
        ),
        _react2.default.createElement("circle", { className: "cls-1", cx: "90", cy: "17.5", r: "17.5" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "17.5", cy: "142.5", r: "17.5" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "162.5", cy: "142.5", r: "17.5" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M1.84 134.68L74.19 10h31.56l72.41 124.68H1.84z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M78 134.68l63.36-63.36 36.8 63.36H78z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M17.5 126.68h145V160h-145z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "84.29", cy: "99.31", r: "3" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "95.71", cy: "99.31", r: "3" }),
        _react2.default.createElement("circle", { className: "cls-4", cx: "79.93", cy: "48.69", r: "3" }),
        _react2.default.createElement("circle", { className: "cls-4", cx: "100.07", cy: "48.69", r: "3" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M84.29 96.31h11.42v6H84.29z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M79.93 45.69h20.15v6H79.93z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M76.93 48.69l4.36 50.62h17.42l4.36-50.62H76.93z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M80.03 84.75l1.26 14.56h17.42l3.13-36.37-21.81 21.81z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M162.5 126.68H86L52.64 160H162.5v-33.32z" }),
        _react2.default.createElement("circle", { className: "cls-4", cx: "90", cy: "122.68", r: "12" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M81.51 131.17a12 12 0 0 0 17-17z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=warning.svg.react.js.map