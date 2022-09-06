import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

const circlePath = (R = 50, CX = 50, CY = 50) => `M ${CX - R}, ${CY} a ${R},${R} 0 1,0 ${R * 2},0 a ${R},${R} 0 1,0 -${R * 2},0`;

const variants = {
  outer: {
    hover: {
      scale: 1.05,
      boxShadow: '0 0.4rem var(--color-shadow)',
    },
    tap: {
      scale: 0.95,
      boxShadow: 0,
    },
    initial: {
      opacity: 0,
      y: 50,
    },
    selected: {
      scale: [1.1, 1],
    },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      boxShadow: '0 0.2rem var(--color-shadow)',
    },
    hide: {
      opacity: 0,
      scale: 0,
    },
  },
  border: {
    show: {
      strokeWidth: 7,
      transition: {
        type: 'spring',
        damping: 7,
        stiffness: 350,
      },
    },
    hide: {
      strokeWidth: 0,
    },
  },
};

const Node = memo((props) => {
  const {
    label,
    color,
    inactive,
    selected,
    disabled,
    draggable,
    linking,
    onClick,
    onLongPress,
    dontAnimate,
  } = props;

  const classes = classNames(
    'node',
    {
      'node--inactive': inactive,
      'node--clickable': !disabled && !draggable && onClick !== noop,
      'node--draggable': draggable,
      'node--selected': selected,
      'node--linking': linking,
      'node--disabled': disabled,
      [`node--${color}`]: color, // Used to set css variables that determine main and flash color
    },
  );

  // Add ellipsis for really long labels
  // 22 Characters chosen from visual testing
  const labelWithEllipsis = useMemo(() => {
    if (label.length < 22) {
      return label;
    }

    return `${label.substring(0, 18)}\u{AD}...`;
  }, [label]);

  // TODO:
  // - Disable animate presents with dontAnimate
  // - Implement useReducedMotion

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      variants={variants.outer}
      initial="initial"
      animate="show"
      exit="hide"
      whileTap="tap"
      whileHover="hover"
      custom={{
        dontAnimate,
        draggable,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 20,
      }}
    >
      {linking && (
        <div className="node__linking" />
      )}
      <div className="node__label">
        <div className="node__label-text">{labelWithEllipsis}</div>
      </div>
      <svg viewBox="0 0 100 100" className="node__border" width="100%" height="100%">
        <motion.path
          variants={variants.border}
          initial="hide"
          animate={selected ? 'show' : 'hide'}
          fill="none"
          d={circlePath(47.5, 50, 50)}
          stroke="var(--color-selected)"
        />
      </svg>
    </motion.div>
  );
});

Node.propTypes = {
  color: PropTypes.string,
  inactive: PropTypes.bool,
  label: PropTypes.string,
  selected: PropTypes.bool,
  draggable: PropTypes.bool,
  disabled: PropTypes.bool,
  linking: PropTypes.bool,
  onClick: PropTypes.func,
  dontAnimate: PropTypes.bool,
};

Node.defaultProps = {
  color: 'neon-coral',
  inactive: false,
  label: 'Node',
  selected: false,
  draggable: false,
  linking: false,
  disabled: false,
  onClick: noop,
  dontAnimate: false,
};

export default Node;
