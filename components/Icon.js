import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import icons from '../utils/getIcon';

// eslint-disable-next-line
class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    // eslint-disable-next-line
    style: PropTypes.object,
  }

  static defaultProps = {
    className: '',
    color: '',
    style: {},
  }

  render() {
    const {
      color,
      name,
      className,
      ...rest
    } = this.props;

    console.log(icons);

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
