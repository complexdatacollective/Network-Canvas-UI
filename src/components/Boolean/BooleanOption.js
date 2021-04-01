import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import RoundCheckbox from './RoundCheckbox';
import MarkdownLabel from '../Fields/MarkdownLabel';

const BooleanOption = ({
  selected,
  label,
  onClick,
}) => {
  const classes = cx(
    'boolean-option',
    { 'boolean-option--selected': selected },
  );

  return (
    <div className={classes} onClick={onClick}>
      <RoundCheckbox checked={selected} />
      <MarkdownLabel label={label} className="form-field-inline-label" />
    </div>
  );
};

BooleanOption.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

BooleanOption.defaultProps = {
  selected: false,
  onClick: () => {},
};

export default BooleanOption;
