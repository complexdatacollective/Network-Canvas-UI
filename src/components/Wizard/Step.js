import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ children }) => (
  <div className="step">
    {children}
  </div>
);

Step.propTypes = {
  children: PropTypes.node,
};

Step.defaultProps = {
  children: null,
};

export default Step;
