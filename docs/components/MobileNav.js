import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MobileNav extends Component {
  static propTypes = {
    onMenuClick: PropTypes.func
  }

  render() {
    return (
      <nav className="mobilenav medium-hide">
        <h1>NC - UI</h1>
        <button className="mobilenav__menu-toggle" onClick={this.props.onMenuClick}>
          Menu
        </button>
      </nav>
    );
  }
}

export default MobileNav;
