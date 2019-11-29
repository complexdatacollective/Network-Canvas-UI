import React from 'react';
import cx from 'classnames';

// must understand dates, must paginate for year
const Panel = ({ current, active, children }) => {

  const className = cx(
    'date-picker__panel',
    {
      'date-picker__panel--active': active,
    },
  );
  return (
    <div className={className}>
      { current &&
        <div>
          <div>
            {current}
          </div>
        </div>
      }
      <div className="date-picker__panel-content">
        {children}
      </div>
    </div>
  );
};

export default Panel;
