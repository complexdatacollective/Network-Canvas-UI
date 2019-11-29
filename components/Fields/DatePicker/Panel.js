import React from 'react';
import cx from 'classnames';

// must understand dates, must paginate for year
const Panel = ({ label, onBack, isComplete, isActive, children }) => {
  const className = cx(
    'date-picker__panel',
    {
      'date-picker__panel--is-complete': isComplete,
      'date-picker__panel--is-active': isActive,
    },
  );
  return (
    <div className={className}>
      { label &&
        <div className="date-picker__panel-navigation" onClick={onBack}>
          {label}
        </div>
      }
      <div className="date-picker__panel-content">
        {children}
      </div>
    </div>
  );
};

export default Panel;
