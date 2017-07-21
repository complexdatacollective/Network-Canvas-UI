import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class InputLabel extends Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string
  }

  render() {
    const {
      active,
      errorText,
      name,
      label
    } = this.props;

    const inputLabelClassName = cx({
      'input__label': true,
      'input__label--active': this.props.active
    })

    const inputErrorClassName = cx({
      'input__error': true,
      'input__error--active': this.props.active
    })

    return (
      <label className={inputLabelClassName} htmlFor={name}>
        {label}
        {errorText &&
          <div className={inputErrorClassName}>
            {errorText}
          </div>
        }
      </label>
    );
  }
}

export default InputLabel;
