import React from 'react';

// must understand dates, must paginate for year
const Panel = ({ current, children }) => {
  return (
    <div className="date-picker__panel">
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
