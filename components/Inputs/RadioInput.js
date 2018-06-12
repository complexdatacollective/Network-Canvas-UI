/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({
  checked,
  name,
  onChange,
  value,
}) => (
  <div className="radio__container">
    <input
      type="radio"
      className="radio"
      checked={checked}
      value={value}
      onChange={onChange}
      name={name}
    />
    <label className="radio__label" htmlFor={name}>
      {name || value}
    </label>
  </div>
);

RadioInput.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default RadioInput;
