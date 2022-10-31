import React, { useMemo, memo, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';
import { motion } from 'framer-motion/dist/framer-motion';
// import { useReducedMotion } from 'framer-motion';

const circlePath = (R = 50, CX = 50, CY = 50) => `M ${CX - R}, ${CY} a ${R},${R} 0 1,0 ${R * 2},0 a ${R},${R} 0 1,0 -${R * 2},0`;
const LONG_PRESS_DELAY = 1500;

const useLongPress = (
  onLongPress,
  onClick,
  { shouldPreventDefault = true, delay = LONG_PRESS_DELAY } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    event => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener("touchend", preventDefault, {
          passive: false
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick();
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: e => start(e),
    onTouchStart: e => start(e),
    onMouseUp: e => clear(e),
    onMouseLeave: e => clear(e, false),
    onTouchEnd: e => clear(e)
  };
};

const isTouchEvent = event => {
  return "touches" in event;
};

const preventDefault = event => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export const longPressEvents = (
  callbackComplete,
  callbackCancelled = noop,
  callbackStarted = noop,
  ms = LONG_PRESS_DELAY,
) => {
  let timeout = null;

  const start = () => {
    callbackStarted();
    timeout = setTimeout(callbackComplete, ms);
  };

  const stop = (event, shouldTriggerClick = true) => {
    console.log('stop');
    callbackCancelled();
    if (timeout) {
      console.log('stop: cancelling timeout');
      clearTimeout(timeout);
    }
  };

  return callbackComplete ? {
    onMouseDown: start,
    onMouseUp: stop,
    onTouchStart: start,
    onMouseLeave: (e) => stop(e, false),
    onTouchEnd: stop,
  } : {};
};

const variants = {
  outer: {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      pathLength: 0,
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0.4rem var(--color-shadow)',
    },
    tap: {
      opacity: 1,
      scale: 0.95,
      boxShadow: 0,
    },
    selected: {
      opacity: 1,
      scale: [0.8, 1.1, 1],
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    disabled: {
      opacity: 0.5,
    },
    longPress: {
      opacity: 1,
      scale: 1,
    },
    linking: {
      opacity: 1,
      scale: 1,
    },
  },
  border: {
    selected: {
      strokeWidth: 7,
      pathLength: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    linking: {
      strokeWidth: 0,
      pathLength: 0,
    },
    show: {
      strokeWidth: 7,
      pathLength: 0,
    },
    longPress: {
      strokeWidth: 7,
      pathLength: 1,
      transition: {
        duration: LONG_PRESS_DELAY / 1000,
      },
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
  } = props;

  const [isPressing, setIsPressing] = useState(false);
  const longPressEvent = useLongPress(onLongPress, onClick);

  // const shouldUseReducedMotion = useReducedMotion();

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

  const animateVariant = () => {
    if (disabled) {
      return 'disabled';
    }

    if (isPressing) {
      return 'longPress';
    }

    if (selected) {
      return 'selected';
    }

    if (linking) {
      return 'linking';
    }

    return 'show';
  };

  // Add ellipsis for really long labels
  // 22 Characters chosen from visual testing
  const labelWithEllipsis = useMemo(() => {
    if (label.length < 22) {
      return label;
    }

    return `${label.substring(0, 18)}\u{AD}...`;
  }, [label]);

  // TODO:
  // - Implement useReducedMotion

  console.log('isPressing', isPressing);

  return (
    <motion.div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...longPressEvent}
      className={classes}
      // onClick={onClick}
      variants={variants.outer}
      initial="initial"
      animate={animateVariant()}
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
  onLongPress: PropTypes.func,
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
  onLongPress: noop,
};

export default Node;
