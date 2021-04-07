import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

const RoundCheckbox = ({ checked, customIcon, negative }) => {
  const classes = cx(
    'round-checkbox',
    { 'round-checkbox--checked': checked },
    { 'round-checkbox--negative': negative },
  );

  return (
    <div className={classes}>
      {(customIcon && customIcon()) || <Icon name={negative ? 'cross' : 'tick'} color="white" />}
    </div>
  );
};

RoundCheckbox.propTypes = {
  checked: PropTypes.bool,
  customIcon: PropTypes.func,
  negative: PropTypes.bool,
};

RoundCheckbox.defaultProps = {
  checked: false,
  customIcon: null,
  negative: false,
};

export default RoundCheckbox;
