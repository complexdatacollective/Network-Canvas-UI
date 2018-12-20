import React from 'react';
import PropTypes from 'prop-types';

const isDeterminate = value => value || value === 0;

/**
 * Renders a determinate <progress> bar, or an indeterminate pseudo-progress bar.
 *
 * This defaults to a determinate bar with 0% progress; to render the indeterminate
 * variant, set the prop `value={null}`.
 */
const Progress = ({ value, max, className, ...rest }) => (
  isDeterminate(value) ?
    <progress className={`progress ${className}`} max={max} value={value} {...rest} />
    :
    <div className={`progress progress--indeterminate ${className}`} {...rest} />
);

Progress.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  value: PropTypes.number,
};

Progress.defaultProps = {
  className: '',
  max: 100,
  value: 0,
};

export default Progress;
