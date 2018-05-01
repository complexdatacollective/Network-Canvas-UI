/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({
  checked,
  name,
  label,
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
      {label || value}
    </label>
  </div>
);

RadioInput.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.any,
};

export default RadioInput;
