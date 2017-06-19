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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Form Arrow - Right"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M0 0h160v160H0z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M80 0h80v160H80A80 80 0 0 1 0 80 80 80 0 0 1 80 0z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "57.53", cy: "80", r: "4.53" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M107.003 79.995l-6.258 6.258L80.04 65.549l6.258-6.258z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "83.17", cy: "62.42", r: "4.42", transform: "rotate(-45 83.166 62.422)" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M86.29 100.707l-6.259-6.258L94.5 79.98l6.258 6.258z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "83.17", cy: "97.58", r: "4.42", transform: "rotate(-45 83.17 97.58)" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M57.53 84.53v-9.06h41.08v9.06z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=form-arrow-right.svg.react.js.map