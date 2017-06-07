import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class TextInput extends Component {
  state = {
    value: ''
  }

  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { name, label, placeholder } = this.props;

    const inputLabelClassName = cx({
      'input__label': true,
      'input__label--active': this.state.value
    })

    return (
      <div className="input__container">
        {placeholder &&
          <div className="input__placeholder">{placeholder}</div>
        }
        <input
          className="input"
          name={name}
          type="text"
          onChange={this.handleChange}
        />
        <label className={inputLabelClassName} htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }
}

export default TextInput;
