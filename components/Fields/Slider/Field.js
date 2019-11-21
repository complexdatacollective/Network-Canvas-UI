import React, { Component } from 'react';
import cx from 'classnames';
import uuid from 'uuid';
import Icon from '../../Icon';
import Slider from './Slider';

const getSliderType = (variableType) => {
  switch (variableType) {
    case 'ordinal':
      return 'LIKERT';
    case 'scalar':
      return 'VAS';
    default:
      return null;
  }
};

const hasValue = value =>
  value !== '';

/**
 * Empty string value should be treated as `null`
 * because redux-forms turns `null` values (e.g.
 * unset values) into empty strings when
 * building the input object...
 */
const getValue = (value) => {
  if (!hasValue(value)) { return null; }
  return value;
};

class SliderField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuid(),
    };
  }

  render() {
    const {
      input,
      meta: { error, invalid, touched },
      label,
      parameters,
      options,
      fieldLabel,
      className,
      hidden,
      type,
    } = this.props;

    const formFieldClasses = cx(
      className,
      'form-field-slider',
    );

    const anyLabel = fieldLabel || label;
    const sliderType = getSliderType(type);

    return (
      <div className="form-field-container" hidden={hidden}>
        { anyLabel &&
          <h4>{anyLabel}</h4>
        }
        <div className={formFieldClasses}>
          <Slider
            options={options}
            parameters={parameters}
            type={sliderType}
            {...input}
            value={getValue(input.value)}
          />
          {invalid && touched && <div className="form-field-text__error"><Icon name="warning" />{error}</div>}
        </div>

      </div>

    );
  }
}

SliderField.defaultProps = {
  options: null,
  parameters: null,
};

export default SliderField;

