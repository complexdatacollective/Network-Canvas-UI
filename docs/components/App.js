import React, { Component, PropTypes } from 'react';

import SideNav from './SideNav';

import 'styles/main.scss';
class App extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div className="app">
        <SideNav />
        <div className="grid__section">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
