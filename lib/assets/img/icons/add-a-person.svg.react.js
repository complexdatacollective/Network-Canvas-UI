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
          "Add A Person"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M224 128A112.08 112.08 0 0 1 83.82 236.42 112 112 0 1 1 224 128z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M112 72.51c-23.8 0-43.1 21.39-43.1 47.77a50.59 50.59 0 0 0 11.1 32l64-64c-7.89-9.68-19.3-15.77-32-15.77z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M80 152.28c7.89 9.68 19.3 15.77 32 15.77 23.81 0 43.11-21.39 43.11-47.77a50.59 50.59 0 0 0-11.1-32z" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M136.12 175.89c-4.09 0-13.58-7.52-10.91-11.27H98.7c2.67 3.76-6.82 11.27-10.91 11.27L112 186.66z" }),
        _react2.default.createElement("path", { className: "cls-4", d: "M142.41 177.82l-58.6 58.6a111.56 111.56 0 0 1-41.73-20.92c9.22-20.13 27.67-35.5 50.22-41.27a36.47 36.47 0 0 0 19.7 5.86 37.11 37.11 0 0 0 19.69-5.85 78.83 78.83 0 0 1 10.72 3.58z" }),
        _react2.default.createElement("path", { className: "cls-5", d: "M181.92 215.5a112.2 112.2 0 0 1-98.1 20.92l58.6-58.61a75 75 0 0 1 39.5 37.69z" }),
        _react2.default.createElement("ellipse", { className: "cls-6", cx: "224.5", cy: "56", rx: "55.5", ry: "56" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M220.5 38h8v36h-8z" }),
        _react2.default.createElement("path", { className: "cls-1", d: "M206.5 60v-8h36v8z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=add-a-person.svg.react.js.map