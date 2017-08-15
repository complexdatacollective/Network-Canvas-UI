import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import icons from '../utils/getIcon';

// eslint-disable-next-line
class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    // eslint-disable-next-line
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    color: PropTypes.string,
    // eslint-disable-next-line
    style: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    size: '',
    color: '',
    style: {},
  }

  render() {
    const {
      color,
      name,
      className,
      size,
      ...rest
    } = this.props;

    const iconClassNames = cx({
      icon: true,
      [`icon--${color}`]: !!color,
    }, [className]);

    const iconComponent = icons(name);
    return React.createElement(
      iconComponent,
      {
        className: iconClassNames,
        name,
        ...rest,
      },
    );
  }
}

export default Icon;
