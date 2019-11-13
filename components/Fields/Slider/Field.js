import React, { Component } from 'react';
import cx from 'classnames';
import uuid from 'uuid';
import Icon from '../../Icon';
import Slider from './Slider';

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
      options,
      fieldLabel,
      className,
      hidden,
    } = this.props;

    const seamlessClasses = cx(
      className,
      'form-field-slider',
    );

    const anyLabel = fieldLabel || label;

    return (
      <div className="form-field-container" hidden={hidden}>
        { anyLabel &&
          <h4>{anyLabel}</h4>
        }
        <div className={seamlessClasses}>
          <Slider
            options={options}
            {...input}
          />
          {invalid && touched && <div className="form-field-text__error"><Icon name="warning" />{error}</div>}
        </div>

      </div>

    );
  }
}

SliderField.defaultProps = {
  options: null,
};

export default SliderField;

