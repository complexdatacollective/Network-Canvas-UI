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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 70 60" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Menu - ORD"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M63.73 0l-6.27 9.38H70L63.73 0z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M62.23 8h3v52h-3zM19 27h12v20H19z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "25", cy: "27", r: "6" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "25", cy: "54", r: "6" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M19 42h12v12H19zM31 42H19l12-11.66V42z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M0 39h12v12H0z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "6", cy: "39", r: "6" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "6", cy: "54", r: "6" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M12 54H0v-3l3.09-3H12v6z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M12 51H0l12-11.66V51z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M38 16h12v31H38z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "44", cy: "16", r: "6" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "44", cy: "54", r: "6" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M38 34.18h12V54H38zM50 34.18H38l12-11.66v11.66z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-ord.svg.react.js.map