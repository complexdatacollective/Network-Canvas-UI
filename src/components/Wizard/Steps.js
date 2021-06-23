import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

const Steps = ({ index, children }) => {
  const step = children[index - 1] && (
    <motion.div
      key={index}
      animate={{ opacity: 1, position: 'static', transition: { delay: 0.4 } }}
      initial={{ opacity: 0, position: 'static' }}
      exit={{ opacity: 0, position: 'absolute' }}
    >
      {children[index - 1]}
    </motion.div>
  );

  return (
    <div className="steps">
      <AnimatePresence>
        {step}
      </AnimatePresence>
    </div>
  );
};

Steps.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node,
};

Steps.defaultProps = {
  index: 1,
  children: null,
};

export default Steps;
