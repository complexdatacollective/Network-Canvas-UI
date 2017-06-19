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
          "Add A Place"
        ),
        _react2.default.createElement("circle", { className: "cls-1", cx: "112", cy: "128", r: "112" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "112", cy: "128", r: "112" }),
        _react2.default.createElement("ellipse", { className: "cls-2", cx: "224.5", cy: "56", rx: "55.5", ry: "56" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M220.5 38h8v36h-8z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M206.5 60v-8h36v8z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M73.04 133l-16.63 58h26.55l58-58H73.04z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M150.96 133h-9.92l-58 58h84.55l-16.63-58z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M134.63 73.84l-13.35 13.34A14.81 14.81 0 0 0 100.45 108l-13.56 13.57c-10.53-14.62-11.48-34.16 2-47.32a33.49 33.49 0 0 1 45.74-.41z" }),
        _react2.default.createElement("path", { className: "cls-6", d: "M139.69 117.74c-8.79 14.08-20.21 25.48-25.23 41.79h-5c-5-15.11-13.86-25.81-22.6-38L100.45 108a14.81 14.81 0 1 0 20.83-20.83l13.34-13.34c12.27 11.42 13.78 29.94 5.07 43.91z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=add-a-place.svg.react.js.map