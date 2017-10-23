/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const InputLabel = ({
  active,
  className,
  errorText,
  name,
  label,
}) => {
  const inputLabelClassName = cx({
    input__label: true,
    'input__label--active': active,
  }, [className]);

  const inputErrorClassName = cx({
    input__error: true,
    'input__error--active': active,
  });

  return (
    <label className={inputLabelClassName} htmlFor={name}>
      {label}
      {errorText &&
        <div className={inputErrorClassName}>
          {errorText}
        </div>
      }
    </label>
  );
};

InputLabel.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  errorText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default InputLabel;
