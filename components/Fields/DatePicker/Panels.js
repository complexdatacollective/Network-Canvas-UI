import React from 'react';
import PropTypes from 'prop-types';
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
};

Panels.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};

Panels.defaultProps = {
  children: null,
  isOpen: true,
};

export default Panels;
