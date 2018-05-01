import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router';
import { SideMenu, MediaQuery, MobileNav } from '../components';

import '../styles/main.scss';

class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  state = {
    sideMenuVisible: false
  }

  navItems = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Typography',
      href: 'typography',
    },
    {
      title: 'Spinners',
      href: 'spinners',
    },
    {
      title: 'Color',
      href: 'color',
    },
    {
      title: 'Buttons',
      href: 'buttons',
    },
    {
      title: 'Icons',
      href: 'icons',
    },
    {
      title: 'Form',
      href: 'form',
    },
  ];

  toggleSideNav = () => {
    this.setState({sideMenuVisible: !this.state.sideMenuVisible })
  }

  render() {
    const menuItems = this.navItems.map((item, idx) => {
      return <Link to={item.href}>{item.title}</Link>
    });

    return (
      <MediaQuery query="medium-up">
        {matches => {
          const appContentClassName = cx({
            'app__content': true,
            'app__content--pushed': matches
          });

          return (
            <div className="app">
              <MobileNav
                onMenuClick={this.toggleSideNav}
              />
              <SideMenu
               className="sidenav"
                heading="Settings"
                menuItems={menuItems}
                visible={this.state.sideMenuVisible || matches}
              />
              <section className={appContentClassName}>
                <div className="app__main">
                  { this.props.children }
                </div>
              </section>
            </div>
          );
        }}
      </MediaQuery>
    );
  }
}

export default AppLayout;
