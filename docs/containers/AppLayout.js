import React, { Component, PropTypes } from 'react';


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
