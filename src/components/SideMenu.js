import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class SideMenu extends Component {
  static propTypes = {
    backgroundHoverColor: PropTypes.string,
    heading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    isVisible: PropTypes.bool,
    menuItems: PropTypes.array,
    onClose: PropTypes.func
  }

  render() {
    const {
      backgroundHoverColor,
      heading,
      isVisible,
      menuItems,
      onClose
    } = this.props;

    const menuClassNames = cx({
      'menu': true,
      [`menu--${backgroundHoverColor}`]: !!backgroundHoverColor
    });

    return (
      <nav className={menuClassNames}>
        <div className="menu__close">
          <button onClick={onClose}>
            <i className="download icon" />
            Cross
          </button>
        </div>
        <h1 className="menu__heading">
          {heading}
        </h1>
        <ul className="menu__items">
          {menuItems.map((item, idx) => {
            return (
              <li key={idx} className="menu__list-item">
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default SideMenu;
