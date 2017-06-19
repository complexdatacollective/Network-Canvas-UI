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
    const { color, name, className } = this.props;

    const iconClassNames = cx({
      'icon': true,
      [`icon--${color}`]: !!color
    }, [className]);

    const iconComponent = icons[name];
    return React.createElement(
      iconComponent,
      {
        className: iconClassNames,
        ...this.props
      }
    );
  }
}

export default Icon;
