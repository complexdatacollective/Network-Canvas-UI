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

    const sidemenuClassNames = cx({
      'sidemenu': true,
      [`sidemenu--${backgroundHoverColor}`]: !!backgroundHoverColor
    }, [this.props.className]);

    return (
      <nav className={sidemenuClassNames}>
        <div className="sidemenu__close">
          <button onClick={onClose}>
            <i className="download icon" />
            Cross
          </button>
        </div>
        <h1 className="sidemenu__heading">
          {heading}
        </h1>
        <ul className="sidemenu__items">
          {menuItems.map((item, idx) => {
            return (
              <li key={idx} className="sidemenu__list-item">
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
