import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import RoundCheckbox from './RoundCheckbox';

const BooleanOption = ({
  selected,
  label,
}) => {
  const classes = cx(
    'boolean-option',
    { 'boolean-option--selected': selected },
  );

  return (
    <div className={classes}>
      <RoundCheckbox checked={selected} />
      {label}
    </div>
  );
};

BooleanOption.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

BooleanOption.defaultProps = {
  selected: false,
};

export default BooleanOption;
