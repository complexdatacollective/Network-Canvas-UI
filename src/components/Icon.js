import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import icons from '../utils/getIcons';

class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    color: PropTypes.string,
    style: PropTypes.object
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
