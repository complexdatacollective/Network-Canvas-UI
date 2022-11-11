import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { getCSSVariableAsNumber, getCSSVariableAsObject } from '../../utils/CSSVariables';

function Fade(props) {
  const {
    in: inProp,
    children,
    customDuration,
    customEasing,
    onExited,
  } = props;

  const defaultDuration = {
    enter: getCSSVariableAsNumber('--animation-duration-fast-ms'),
    exit: getCSSVariableAsNumber('--animation-duration-fast-ms'),
  };

  const defaultEasing = getCSSVariableAsObject('--animation-easing-js');

  const duration = customDuration || defaultDuration;
  const easing = customEasing || defaultEasing;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inProp ? 1 : 0 }}
      transition={{ duration, ease: easing }}
      onAnimationComplete={inProp ? undefined : onExited}
    >
      {children}
    </motion.div>
  );
}

Fade.propTypes = {
  children: PropTypes.any,
  customDuration: PropTypes.object,
  customEasing: PropTypes.array,
  in: PropTypes.bool.isRequired,
  onExited: PropTypes.func,
};

Fade.defaultProps = {
  children: null,
  customDuration: null,
  customEasing: null,
  onExited: () => { },
};

export default Fade;
