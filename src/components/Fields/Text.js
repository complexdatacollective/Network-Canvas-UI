import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import MaterialIcon from '@material-ui/core/Icon';
import Icon from '../Icon';
import MarkdownLabel from './MarkdownLabel';

const TextInput = ({
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
  adornment,
  adornmentPosition,
}) => {
  const id = useRef(uuid());
  const [hasFocus, setFocus] = useState(false);

  const handleFocus = (...args) => {
    setFocus(true);
    if (input.onFocus) { input.onFocus(...args); }
  };

  const handleBlur = (...args) => {
    setFocus(false);
    if (input.onBlur) { input.onBlur(...args); }
  };

  const hasAdornment = !!adornment;

  const seamlessClasses = cx(
    className,
    'form-field-text',
    {
      'form-field-text--has-focus': hasFocus,
      'form-field-text--has-error': invalid && touched && error,
      'form-field-text--adornment': hasAdornment,
      'form-field-text--adornment-right': hasAdornment && adornmentPosition === 'right',
      'form-field-text--adornment-left': hasAdornment && adornmentPosition === 'left',
    },
  );

  const anyLabel = fieldLabel || label;
  return (
    <div className="form-field-container" hidden={hidden}>
      { anyLabel
        && <MarkdownLabel label={anyLabel} />}
      <div className={seamlessClasses}>
        <input
          id={id.current}
          name={input.name}
          className="form-field form-field-text__input"
          placeholder={placeholder}
          autoFocus={autoFocus} // eslint-disable-line
          type={type}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...input}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        { hasAdornment && (
          <div className="form-field-text__adornment">
            {adornment}
          </div>
        )}
        {invalid && touched && (
        <div className="form-field-text__error">
          <Icon name="warning" />
          {error}
        </div>
        )}
      </div>

    </div>

  );
};

TextInput.propTypes = {
  adornment: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(['left', 'right']),
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  fieldLabel: PropTypes.string,
  hidden: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.oneOf([
    'text',
    'number',
    'search',
  ]),
};

TextInput.defaultProps = {
  adornment: null,
  adornmentPosition: 'right',
  autoFocus: false,
  className: '',
  fieldLabel: null,
  hidden: false,
  input: {},
  label: null,
  meta: {},
  placeholder: 'Enter some text...',
  type: 'text',
};

export default TextInput;
