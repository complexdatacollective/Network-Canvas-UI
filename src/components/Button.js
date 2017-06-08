import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Button extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    children: PropTypes.node,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.object
    ]),
    iconPosition: PropTypes.oneOf([
      'left', 'right'
    ]),
    size: PropTypes.string,
    color: PropTypes.string
  }

  renderButtonIcon() {
    const { icon, iconPosition } = this.props;

    const iconClassNames = cx({
      'button__icon': true,
      'button__icon--right': iconPosition === 'right'
    });

    let iconElement = null;
    if (icon) {
      if (typeof icon === 'string') {
        const Icon = require('./Icon').default;
        iconElement = <Icon name={icon} className={iconClassNames} />;
      } else {
        iconElement = React.cloneElement(
          this.props.icon,
          { className: iconClassNames }
        );
      }
    }
    return iconElement;
  }

  render() {
    const { color, size } = this.props;

    const buttonClassNames = cx({
      'button': true,
      [`button--${color}`]: !!color,
      [`button--${size}`]: !!size
    });

    return (
      <button className={buttonClassNames}>
        {this.renderButtonIcon()}
        <span className="button__content">{this.props.children || this.props.content}</span>
      </button>
    );
  }
}

export default Button;
