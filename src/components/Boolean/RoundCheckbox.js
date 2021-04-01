import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

const RoundCheckbox = ({ checked }) => {
  const classes = cx(
    'round-checkbox',
    { 'round-checkbox--checked': checked },
  );

  return (
    <div className={classes}>
      <Icon name="tick" color="white" />
    </div>
  );
};

RoundCheckbox.propTypes = {
  checked: PropTypes.bool,
};

RoundCheckbox.defaultProps = {
  checked: false,
};

export default RoundCheckbox;
