import React from 'react';
import cx from 'classnames';

const Panels = ({ children, isOpen }) => {
  const panelsClasses = cx(
    'date-picker__panels',
    {
      'date-picker__panels--is-open': isOpen,
    },
  );

  return (
    <div className={panelsClasses}>
      {children}
    </div>
  );
}

export default Panels;
