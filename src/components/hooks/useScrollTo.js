import { useEffect, useRef } from 'react';
import anime from 'animejs';
import scrollparent from 'scrollparent';
import { getCSSVariableAsNumber, getCSSVariableAsObject } from '../../utils/CSSVariables';

const scrollFocus = (destination, delay = 0) => {
  if (!destination) { return null; }

  return setTimeout(() => {
    const scroller = scrollparent(destination);
    const scrollStart = scroller.scrollTop;
    const destinationOffset = parseInt(destination.getBoundingClientRect().top, 10);
    const scrollEnd = scrollStart + destinationOffset;

    anime({
      targets: scroller,
      scrollTop: scrollEnd,
      easing: getCSSVariableAsObject('--animation-easing-js'),
      duration: getCSSVariableAsNumber('--animation-duration-fast-ms'),
    });
  }, delay);
};

/**
 * Automatically scroll to ref after conditions are met
 *
 * @param {object} ref react ref object
 * @param {func} condition when this is true, run scoll to to, receives watch array as arguments
 * @param {array} watch values to watch for changes, same as useEffect;
 * @param {number} delay (optional) delay before triggering scroll effect
 * e.g. after parent animation
 */
const useScrollTo = (
  ref,
  condition,
  watch,
  delay = getCSSVariableAsNumber('--animation-duration-fast-ms'),
) => {
  const timer = useRef();

  useEffect(() => {
    if (ref && ref.current && condition(...watch)) {
      clearTimeout(timer.current);
      timer.current = scrollFocus(ref.current, delay);
    }
  }, watch);
};

export default useScrollTo;
