import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

class SideNav extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    const navItems = [
      {
        title: 'Home',
        href: '/'
      },
      {
        title: 'Typography',
        href: 'typography'
      },
      {
        title: 'Color',
        href: 'color'
      },
      {
        title: 'Buttons',
        href: 'buttons'
      },
      {
        title: 'Icons',
        href: 'icons'
      },
      {
        title: 'Form',
        href: 'form'
      }
    ];

    return (
      <nav className="sidenav">
        <ul className="sidenav__list">
          {navItems.map((item, idx) => {
            return (
              <li key={idx} className="sidenav__list-item">
                <Link to={item.href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default SideNav;
