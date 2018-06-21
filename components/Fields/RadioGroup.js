import React, { Component } from 'react';
import { fieldPropTypes } from 'redux-form';
import PropTypes from 'prop-types';
import { get, isString } from 'lodash';
import cx from 'classnames';
import uuid from 'uuid';
import Radio from './Radio';

const toString = value => (isString(value) ? value : JSON.stringify(value));
const getValue = option => get(option, 'value', option);
const getLabel = option => get(option, 'label', toString(getValue(option)));

class RadioGroup extends Component {
  static propTypes = {
    options: PropTypes.array,
    label: PropTypes.string,
    fieldLabel: PropTypes.string,
    ...fieldPropTypes,
  };

  static defaultProps = {
    label: null,
    fieldLabel: null,
    options: [],
  };

  componentWillMount() {
    this.id = uuid();
  }

  onChange = ({ target: { value: index } }) =>
    this.props.input.onChange(getValue(this.props.options[index]));

  renderOption = (option, index) => {
    const {
      input: { value },
    } = this.props;

    const optionValue = getValue(option);
    const optionLabel = getLabel(option);
    const selected = optionValue === value;

    return (
      <Radio
        key={index}
        input={{
          value: index,
          checked: selected,
          onChange: this.onChange,
        }}
        label={optionLabel}
      />
    );
  }

  render() {
    const {
      options,
      className,
      label,
      fieldLabel,
    } = this.props;

    const classNames = cx(
      'form-field',
      'form-field-radio-group',
      className,
    );

    return (
      <div className="form-field-container">
        <h4>
          {fieldLabel || label || ''}
        </h4>
        <div className={classNames}>
          { options.map(this.renderOption) }
        </div>
      </div>
    );
  }
}

export { RadioGroup };

export default RadioGroup;
