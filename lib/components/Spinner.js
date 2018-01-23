"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(props) {
  return _react2.default.createElement(
    "div",
    { className: "nc-spinner" },
    _react2.default.createElement(
      "div",
      { className: "circle-container" },
      _react2.default.createElement("div", { className: "half-circle" }),
      _react2.default.createElement("div", { className: "half-circle rot" })
    ),
    _react2.default.createElement(
      "div",
      { className: "circle-container" },
      _react2.default.createElement("div", { className: "half-circle" }),
      _react2.default.createElement("div", { className: "half-circle rot" })
    ),
    _react2.default.createElement(
      "div",
      { className: "circle-container" },
      _react2.default.createElement("div", { className: "half-circle" }),
      _react2.default.createElement("div", { className: "half-circle rot" })
    ),
    _react2.default.createElement(
      "div",
      { className: "circle-container" },
      _react2.default.createElement("div", { className: "half-circle" }),
      _react2.default.createElement("div", { className: "half-circle rot" })
    )
  );
};

exports.default = Spinner;
module.exports = exports["default"];
//# sourceMappingURL=Spinner.js.map