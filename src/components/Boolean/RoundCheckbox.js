import React from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '@material-ui/icons/DoneRounded';
import cx from 'classnames';

const RoundCheckbox = ({ checked }) => {
  const classes = cx(
    'round-checkbox',
    { 'round-checkbox--checked': checked },
  );

  return (
    <div className={classes}>
      <DoneIcon
        style={{ color: 'var(--color-white)' }}
      />
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
