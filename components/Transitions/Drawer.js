import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import { getCSSVariableAsNumber, getCSSVariableAsObject } from '../../utils/CSSVariables';

const FolderTransition = ({ children, ...props }) => {
  const defaultEasing = getCSSVariableAsObject('--animation-easing-js');
  const standardDuration = getCSSVariableAsNumber('--animation-duration-standard-ms');
  const slowDuration = getCSSVariableAsNumber('--animation-duration-slow-ms');

  const appear = {
    opacity: {
      value: [0, 1],
      duration: standardDuration,
      easing: defaultEasing,
    },
    scaleY: {
      value: [0, 1],
      duration: slowDuration,
      easing: defaultEasing,
    },
  };

  const disappear = {
    opacity: 0,
    scaleY: 0,
    margin: 0,
    maxHeight: 0,
    duration: standardDuration,
  };

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      timeout={slowDuration}
      onEntering={
        (el) => {
          const { height } = el.getBoundingClientRect();

          anime({
            targets: el,
            elasticity: 0,
            easing: 'easeInOutQuad',
            maxHeight: {
              value: [0, `${height}px`],
              easing: 'easeInOutQuad',
              duration: standardDuration,
            },
            ...appear,
          });
        }
      }
      onExiting={
        (el) => {
          anime({
            targets: el,
            elasticity: 0,
            easing: 'easeInOutQuad',
            ...disappear,
          });
        }
      }
      {...props}
    >
      { children }
    </Transition>
  );
};

FolderTransition.propTypes = {
  children: PropTypes.any.isRequired,
};

FolderTransition.defaultProps = {
  children: null,
};

export default FolderTransition;
