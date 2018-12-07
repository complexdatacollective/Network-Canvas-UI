import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import { getCSSVariableAsNumber, getCSSVariableAsObject } from '../../utils/CSSVariables';

const appear = {
  translateY: ['-20vh', 0],
  elasticity: 0,
  easing: getCSSVariableAsObject('--animation-easing-js'),
  duration: getCSSVariableAsNumber('--animation-duration-standard-ms'),
};

const Drop = ({ children, ...props }) => (
  <Transition
    mountOnEnter
    unmountOnExit
    appear
    timeout={getCSSVariableAsNumber('--animation-duration-standard-ms')}
    onEntering={el => anime({ targets: el, ...appear })}
    {...props}
  >
    { children }
  </Transition>
);

Drop.propTypes = {
  children: PropTypes.any,
};

Drop.defaultProps = {
  children: null,
};

export default Drop;
