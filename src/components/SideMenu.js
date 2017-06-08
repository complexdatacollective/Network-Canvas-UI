import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Icon } from '.';

class SideMenu extends Component {
  static propTypes = {
    backgroundHoverColor: PropTypes.string,
    heading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    visible: PropTypes.bool,
    menuItems: PropTypes.array,
    onClose: PropTypes.func,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
  }

  render() {
    const {
      backgroundHoverColor,
      heading,
      visible,
      menuItems,
      onClose,
      content
    } = this.props;

    const sidemenuClassNames = cx({
      'sidemenu': true,
      'sidemenu--visible': visible,
      [`sidemenu--${backgroundHoverColor}`]: !!backgroundHoverColor
    }, [this.props.className]);

    return (
      <nav className={sidemenuClassNames}>
        <div className="sidemenu__close">
          <button onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <h1 className="sidemenu__heading">
          {heading}
        </h1>
        {
          content &&
          <div className="sidemenu__content">
            {content}
          </div>
        }
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
