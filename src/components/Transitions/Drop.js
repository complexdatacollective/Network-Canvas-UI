import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const variants = {
  visible: {
    opacity: 1,
    y: '0',
  },
  hidden: {
    opacity: 0,
    y: '-5vh',
  },
};


const Drop = ({ children, ...props }) => {
  return (
    <motion.div
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};


Drop.propTypes = {
  children: PropTypes.any,
};

Drop.defaultProps = {
  children: null,
};

export default Drop;
