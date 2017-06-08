'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideMenu = function (_Component) {
  _inherits(SideMenu, _Component);

  function SideMenu() {
    _classCallCheck(this, SideMenu);

    return _possibleConstructorReturn(this, (SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).apply(this, arguments));
  }

  _createClass(SideMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundHoverColor = _props.backgroundHoverColor,
          heading = _props.heading,
          visible = _props.visible,
          menuItems = _props.menuItems,
          onClose = _props.onClose,
          content = _props.content;


      var sidemenuClassNames = (0, _classnames2.default)(_defineProperty({
        'sidemenu': true,
        'sidemenu--visible': visible
      }, 'sidemenu--' + backgroundHoverColor, !!backgroundHoverColor), [this.props.className]);

      return _react2.default.createElement(
        'nav',
        { className: sidemenuClassNames },
        _react2.default.createElement(
          'div',
          { className: 'sidemenu__close' },
          _react2.default.createElement(
            'button',
            { onClick: onClose },
            _react2.default.createElement(_.Icon, { name: 'close' })
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: 'sidemenu__heading' },
          heading
        ),
        content && _react2.default.createElement(
          'div',
          { className: 'sidemenu__content' },
          content
        ),
        _react2.default.createElement(
          'ul',
          { className: 'sidemenu__items' },
          menuItems.map(function (item, idx) {
            return _react2.default.createElement(
              'li',
              { key: idx, className: 'sidemenu__list-item' },
              item
            );
          })
        )
      );
    }
  }]);

  return SideMenu;
}(_react.Component);

SideMenu.propTypes = {
  backgroundHoverColor: _propTypes2.default.string,
  heading: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  visible: _propTypes2.default.bool,
  menuItems: _propTypes2.default.array,
  onClose: _propTypes2.default.func,
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};
exports.default = SideMenu;
module.exports = exports['default'];
//# sourceMappingURL=SideMenu.js.map