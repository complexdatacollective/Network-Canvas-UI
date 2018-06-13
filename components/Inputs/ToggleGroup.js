/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import ContextInput from './ContextInput';
import Checkbox from './Checkbox';
// import ToggleInput from './ToggleInput';
import InputLabel from './InputLabel';

const isChecked = (value, option) => (value ? !!value[option] : false);

const ToggleGroup = ({
  options,
  label,
  name,
  value,
  errorText,
  tooltip,
  toggleComponent,
  onOptionClick,
}) => {
  let ToggleComponent = ContextInput;
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
        {map(options, (option, index) => (
          <ToggleComponent
            key={index}
            label={option.label}
            color={`cat-color-seq-${index + 1}`}
            onCheck={(e, checked) => onOptionClick(e, checked, option.value)}
            checked={isChecked(value, option.value)}
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
  toggleComponent: PropTypes.oneOf(['toggle', 'checkbox', 'context']),
};

export default ToggleGroup;
