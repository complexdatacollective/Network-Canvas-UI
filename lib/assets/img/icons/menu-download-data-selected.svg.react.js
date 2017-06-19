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
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 70" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Menu - Download Data Selected"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M3.5 70v-7h53v7z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M56.5 63v7H24.32l6.99-7H56.5z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "3.5", cy: "66.5", r: "3.5" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "56.5", cy: "66.5", r: "3.5" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M60 30.08h-7a23 23 0 1 0-46 0H0a30 30 0 1 1 60 0z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M30 0A30.07 30.07 0 0 0 0 30.08h7a23 23 0 0 1 30-22l5.4-5.4A29.75 29.75 0 0 0 30 0z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "56.5", cy: "30.08", r: "3.5" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "3.5", cy: "30.08", r: "3.5" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M26.4 19.88h7v29.7h-7z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M33.4 35.81l-7 7V19.88h7v15.93z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "29.9", cy: "19.88", r: "3.5" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M29.899 57.382l-4.837-4.837 16.002-16.002L45.9 41.38z" }),
        _react2.default.createElement("circle", { className: "cls-2", cx: "43.48", cy: "38.96", r: "3.42", transform: "rotate(-45 43.482 38.97)" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M13.9 41.381l4.836-4.837 11.18 11.18-4.837 4.836z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M13.903 41.382l4.837-4.836 6.943 6.944-4.836 4.836z" }),
        _react2.default.createElement("circle", { className: "cls-1", cx: "16.32", cy: "38.96", r: "3.42", transform: "rotate(-45 16.318 38.96)" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-download-data-selected.svg.react.js.map