import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';

class TextInput extends Component {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
  }

  render() {
    const { name, label, placeholder } = this.props;
    return (
      <div className="input__container">
        {placeholder &&
          <div className="input__placeholder">{placeholder}</div>
        }
        <input
          className="input"
          name={name}
          type="text"
        />
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }
}

export default TextInput;
