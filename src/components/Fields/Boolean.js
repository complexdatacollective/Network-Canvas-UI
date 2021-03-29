import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MarkdownLabel from './MarkdownLabel';
import Boolean from '../Boolean/Boolean';

const BooleanField = ({
  label,
  className,
  input,
  disabled,
}) => {
  const componentClasses = cx(
    'form-field-boolean',
    className,
    {
      'form-field-boolean--disabled': disabled,
    },
  );

  const options = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  return (
    <div className={componentClasses}>
      <div className="form-field-boolean__label">
        {label && <MarkdownLabel label={label} className="form-field-inline-label" />}
      </div>
      <div className="form-field-boolean__control">
        <Boolean
          options={options}
          value={input.value}
          onChange={input.onChange}
        />
      </div>
    </div>
  );
};

BooleanField.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
};

BooleanField.defaultProps = {
  className: '',
  label: null,
  disabled: false,
};

export default BooleanField;
