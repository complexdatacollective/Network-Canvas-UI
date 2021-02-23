import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import Icon from '../../Icon';
import DatePicker from './DatePicker';
import { ALLOWED_MARKDOWN_LABEL_TAGS } from '../../../utils/config';

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
          <h4>
            <ReactMarkdown
              source={anyLabel}
              allowedTypes={ALLOWED_MARKDOWN_LABEL_TAGS}
            />
          </h4>
        }
        <div className={formFieldClasses} name={input.name}>
          <DatePicker
            parameters={parameters}
            {...input}
            onChange={input.onBlur}
            parentRef={this.ref}
          />
          {invalid && touched &&
            <div className="form-field-date-picker__error">
              <div className="form-field-date-picker__error-message">
                <Icon name="warning" />{error}
              </div>
            </div>
          }
        </div>

      </div>

    );
  }
}

DatePickerField.propTypes = {
  parameters: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
  fieldLabel: PropTypes.string,
  className: PropTypes.string,
  hidden: PropTypes.bool,
};

DatePickerField.defaultProps = {
  meta: {},
  label: null,
  fieldLabel: null,
  className: null,
  hidden: null,
};

export default DatePickerField;

