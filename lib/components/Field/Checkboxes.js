"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash");

var Checkboxes = function Checkboxes(_ref) {
  var name = _ref.name,
      options = _ref.options,
      onClickOption = _ref.onClickOption;
  return React.createElement(
    "div",
    null,
    (0, _lodash.map)(options, function (value, option) {
      return React.createElement(
        "div",
        { key: option },
        React.createElement(
          "label",
          { htmlFor: name + "_" + option },
          React.createElement("input", {
            type: "checkbox",
            id: name + "_" + option,
            name: name,
            value: option,
            checked: value,
            onClick: function onClick() {
              onClickOption(option);
            }
          }),
          " ",
          option
        )
      );
    })
  );
};

exports.default = Checkboxes;
module.exports = exports["default"];
//# sourceMappingURL=Checkboxes.js.map