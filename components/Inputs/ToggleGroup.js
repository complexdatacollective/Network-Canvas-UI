/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { map, zip } from 'lodash';

import ContextInput from './ContextInput';
import Checkbox from './Checkbox';
import ToggleInput from './ToggleInput';
import InputLabel from './InputLabel';

const isChecked = (value, option) => (value ? !!value[option] : false);

const ToggleGroup = ({
  options,
  colors,
  label,
  name,
  value,
  errorText,
  tooltip,
  toggleComponent,
  onOptionClick,
}) => {
  const optionsWithColor = (
    colors ? zip(options, colors) : map(options, (option, index) => [option, index])
  );

  let ToggleComponent = ToggleInput;
  if (toggleComponent === 'checkbox') {
    ToggleComponent = Checkbox;
  } else if (toggleComponent === 'context') {
    ToggleComponent = ContextInput;
  }

  return (
    <div className="toggle-group">
      <InputLabel
        name={name}
        label={label}
        errorText={errorText}
        tooltip={tooltip}
      />
      <div className="toggle-group__inputs">
        {map(optionsWithColor, ([option, color]) => (
          <ToggleComponent
            key={option}
            name={name}
            label={option}
            color={color || null}
            onCheck={(e, checked) => onOptionClick(e, checked, option)}
            checked={isChecked(value, option)}
          />
        ))}
      </div>
    </div>
  );
};

ToggleGroup.propTypes = {
  errorText: PropTypes.node,
  tooltip: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onOptionClick: PropTypes.func,
  value: PropTypes.any,
  options: PropTypes.array.isRequired,
  colors: PropTypes.array,
  toggleComponent: PropTypes.oneOf(['toggle', 'checkbox', 'context']),
};

export default ToggleGroup;
