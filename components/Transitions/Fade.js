import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import { getCSSVariableAsNumber, getCSSVariableAsObject } from '../../utils/CSSVariables';

function Fade(props) {
  const { children, customDuration, customEasing, enter, onExited } = props;

  const defaultDuration = {
    enter: getCSSVariableAsNumber('--animation-duration-fast-ms'),
    exit: getCSSVariableAsNumber('--animation-duration-fast-ms'),
  };

  const defaultEasing = getCSSVariableAsObject('--animation-easing-js');

  const duration = customDuration || defaultDuration;
  const easing = customEasing || defaultEasing;

  return (
    <Transition
      timeout={duration}
      onEnter={
        (el) => {
          anime({
            targets: el,
            opacity: [0, 1],
            elasticity: 0,
            easing,
            duration: duration.enter,
          });
        }
      }
      onExit={
        (el) => {
          anime({
            targets: el,
            opacity: [1, 0],
            elasticity: 0,
            easing,
            duration: duration.exit,
          });
        }
      }
      enter={enter}
      in={props.in}
      appear
      unmountOnExit
      onExited={onExited}
    >
      { children }
    </Transition>
  );
}

export default Fade;
