import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SideNav } from 'components';

import 'styles/main.scss';

class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div className="app">
        <SideNav />
        <section className="grid__section">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default AppLayout;
