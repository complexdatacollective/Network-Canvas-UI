import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import Icon from '../Icon';
import MarkdownLabel from './MarkdownLabel';

class TextInput extends PureComponent {
  constructor(props) {
    super(props);

    this.id = uuid();
  }

  render() {
    const {
      input,
      meta: {
        error, active, invalid, touched,
      },
      label,
      placeholder,
      fieldLabel,
      className,
      type,
      autoFocus,
      hidden,
    } = this.props;

    const seamlessClasses = cx(
      className,
      'form-field-text',
      {
        'form-field-text--has-focus': active,
        'form-field-text--has-error': invalid && touched && error,
      },
    );

    const anyLabel = fieldLabel || label;

    return (
      <div className="form-field-container" hidden={hidden}>
        { anyLabel
          && <MarkdownLabel label={anyLabel} />}
        <div className={seamlessClasses}>
          <input
            id={this.id}
            name={input.name}
            className="form-field form-field-text form-field-text__input"
            placeholder={placeholder}
            autoFocus={autoFocus} // eslint-disable-line
            type={type}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...input}
          />
          {invalid && touched && (
          <div className="form-field-text__error">
            <Icon name="warning" />
            {error}
          </div>
          )}
        </div>

      </div>

    );
  }
}

TextInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  fieldLabel: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'number',
    'search',
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  hidden: PropTypes.bool,
};

TextInput.defaultProps = {
  input: {},
  meta: {},
  type: 'text',
  autoFocus: false,
  label: null,
  fieldLabel: null,
  placeholder: 'Enter some text...',
  className: '',
  hidden: false,
};

export default TextInput;
