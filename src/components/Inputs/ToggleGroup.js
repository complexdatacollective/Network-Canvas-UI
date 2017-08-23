import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map, zip } from 'lodash';

import ContextInput from './ContextInput';
import Checkbox from './Checkbox';
import ToggleInput from './ToggleInput';
import InputLabel from './InputLabel';

const isChecked = (value, option) => (value ? !!value[option] : false);

class ToggleGroup extends Component {
  static propTypes = {
    errorText: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    onOptionClick: PropTypes.func,
    value: PropTypes.any,
    options: PropTypes.array.isRequired,
    colors: PropTypes.array,
    toggleComponent: PropTypes.oneOf(['toggle', 'checkbox', 'context']),
  }

  render() {
    const {
      options,
      colors,
      label,
      name,
      value,
      errorText,
      toggleComponent,
    } = this.props;

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
        />
        <div className="toggle-group__inputs">
          {map(optionsWithColor, ([option, color]) => (
            <ToggleComponent
              key={option}
              name={name}
              label={option}
              color={color || null}
              onCheck={(e, checked) => this.props.onOptionClick(e, checked, option)}
              checked={isChecked(value, option)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ToggleGroup;
