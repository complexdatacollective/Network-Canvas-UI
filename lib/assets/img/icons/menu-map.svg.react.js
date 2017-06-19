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
          "Menu - Map"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M60 38H10L0 70h70L60 38z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M10 38L0 70h28l32-32H10zM48.56 5.44l-8 8a8.8 8.8 0 0 0-5.57-2A8.92 8.92 0 0 0 28.1 26L20 34.18l-.36-.49A22.63 22.63 0 0 1 15 20.28 20.23 20.23 0 0 1 35 0a20 20 0 0 1 13.56 5.44" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M55 20.28a22 22 0 0 1-4.62 13.4c-1.82 2.44-3.65 4.82-5.41 7.25a55.35 55.35 0 0 0-8.3 15.49.86.86 0 0 1-.81.6h-1.73a.87.87 0 0 1-.81-.59 59.56 59.56 0 0 0-8.43-15.5c-1.59-2.24-3.26-4.46-4.9-6.76L28.1 26a8.89 8.89 0 1 0 12.47-12.52l8-8A20.26 20.26 0 0 1 55 20.28" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=menu-map.svg.react.js.map