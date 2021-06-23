import React from 'react';
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

export default Steps;
