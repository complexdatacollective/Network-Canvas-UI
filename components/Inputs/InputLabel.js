/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '..';

const InputLabel = ({
  active,
  className,
  errorText,
  name,
  label,
  tooltip,
}) => {
  const inputLabelClassName = cx({
    input__label: true,
    'input__label--active': active,
  }, [className]);

  const inputErrorClassName = cx({
    input__error: true,
    'input__error--active': active,
  });

  const wrapperClassName = cx({
    'input__label-wrapper': true,
    'input__tooltip-right': tooltip === 'right',
    'input__tooltip-bottom': tooltip === 'bottom',
  });

  /* eslint-disable-next-line */
  console.warn('DEPRECATED: You are using a deprecated input component, located in ui/components/Inputs. Please update your component to use the new inputs found in ui/components/Fields.');

  return (
    <div className={wrapperClassName}>
      <label className={inputLabelClassName} htmlFor={name}>
        {label}
      </label>
      {errorText &&
        <div className={inputErrorClassName}>
          {tooltip && <Icon name="error" />}
          <div className="input__error-text">
            {tooltip && <h4>Error!</h4>}
            <h4>{errorText}</h4>
          </div>
        </div>
      }
    </div>
  );
};

InputLabel.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  errorText: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
};

export default InputLabel;
