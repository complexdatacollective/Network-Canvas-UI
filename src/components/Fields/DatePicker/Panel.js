import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Panel = ({ type, isComplete, isActive, children }) => {
  const className = cx(
    'date-picker__panel',
    {
      [`date-picker__panel--${type}`]: type,
      'date-picker__panel--is-complete': isComplete,
      'date-picker__panel--is-active': isActive,
    },
  );
  return (
    <div className={className}>
      <div className="date-picker__panel-content">
        {children}
      </div>
    </div>
  );
};

Panel.propTypes = {
  type: PropTypes.string,
  isComplete: PropTypes.bool,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

Panel.defaultProps = {
  type: null,
  isComplete: false,
  isActive: false,
  children: null,
};

export default Panel;
