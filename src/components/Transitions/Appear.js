import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import { getCSSVariableAsNumber, getCSSVariableAsObject } from '../../utils/CSSVariables';

const AppearTransition = ({ children, ...props }) => {
  const defaultEasing = getCSSVariableAsObject('--animation-easing-js');
  const standardDuration = getCSSVariableAsNumber('--animation-duration-standard-ms');

  const appear = {
    opacity: [0, 1],
    scale: [0, 1],
    elasticity: 0,
    easing: defaultEasing,
    duration: standardDuration,
  };

  const disappear = {
    opacity: [1, 0],
    scale: [1, 0],
    height: 0,
    margin: 0,
    elasticity: 0,
    easing: defaultEasing,
    duration: standardDuration,
  };

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      timeout={standardDuration}
      onEntering={el => anime({ targets: el, ...appear })}
      onExiting={el => anime({ targets: el, ...disappear })}
      {...props}
    >
      { children }
    </Transition>
  );
};

AppearTransition.propTypes = {
  children: PropTypes.any.isRequired,
};

AppearTransition.defaultProps = {
  children: null,
};

export default AppearTransition;
