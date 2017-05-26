import React, { Component } from 'react';
import cx from 'classnames';

import icons from 'utils/getIcons';

class Icon extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    color: React.PropTypes.string,
    style: React.PropTypes.object
  }

  render() {
    const { color } = this.props;

    const iconClassNames = cx({
      'icon': true,
      [`icon--${color}`]: !!color
    });

    return React.createElement(
      icons[this.props.name],
      {
        className: iconClassNames,
        style: { height: 100 }
      }
    );
  }
}

export default Icon;
