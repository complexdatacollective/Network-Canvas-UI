import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Panels = ({ children }) => (
  <motion.div
    className="date-picker__panels"
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ scaleY: 1, opacity: 1 }}
    exit={{ scaleY: 0, opacity: 0 }}
    style={{ originX: 0, originY: 0 }}
    layout
  >
    {children}
  </motion.div>
);

Panels.propTypes = {
  children: PropTypes.node,
};

Panels.defaultProps = {
  children: null,
};

export default Panels;
