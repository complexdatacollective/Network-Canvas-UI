import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { SideMenu } from 'Components';

import '../styles/main.scss';

class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  navItems = [
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
    },
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
    },
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

  render() {
    const menuItems = this.navItems.map((item, idx) => {
      return <Link to={item.href}>{item.title}</Link>
    });

    return (
      <div className="app">
        <SideMenu
          className="sidenav"
          heading="Settings"
          menuItems={menuItems}
        />
        <section className="grid__section">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default AppLayout;
