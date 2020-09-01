import React, { Component } from 'react';
import cx from 'classnames';
import uuid from 'uuid';
import Icon from '../../Icon';
import DatePicker from './DatePicker';

class DatePickerField extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

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
      fieldLabel,
      className,
      hidden,
    } = this.props;

    const formFieldClasses = cx(
      className,
      'form-field-date-picker',
      { 'form-field-date-picker--has-error': invalid && touched },
    );

    const anyLabel = fieldLabel || label;
    return (
      <div className="form-field-container" hidden={hidden} ref={this.ref}>
        { anyLabel &&
          <h4>{anyLabel}</h4>
        }
        <div className={formFieldClasses} name={input.name}>
          <DatePicker
            parameters={parameters}
            {...input}
            onChange={input.onBlur}
            parentRef={this.ref}
          />
          <div className="form-field-date-picker__error">
            <div className="form-field-date-picker__error-message">
              <Icon name="warning" />{error}
            </div>
          </div>
        </div>

      </div>

    );
  }
}

DatePickerField.defaultProps = {
  parameters: null,
};

export default DatePickerField;

