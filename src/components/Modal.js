import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import Drop from './Transitions/Drop';
import window from './window';
import { getCSSVariableAsNumber } from '../utils/CSSVariables';

class Modal extends Component {
  handleBlur = (event) => {
    if (event.target !== event.currentTarget) { return; }
    this.props.onBlur(event);
  }

  render() {
    const { children, show, zIndex } = this.props;

    const style = zIndex ? { zIndex } : null;

    const variants = {
      visible: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          duration: getCSSVariableAsNumber('--animation-duration-fast'),
        },
      },
      hidden: {
        opacity: 0,
      },
    };

    return (
      <AnimatePresence>
        { show && (
          <motion.div
            className="modal"
            style={style}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="modal__background" />
            <div className="modal__content" onClick={this.handleBlur} >
              <Drop>
                { children }
              </Drop>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.element,
  zIndex: PropTypes.number,
  onBlur: PropTypes.func,
};

Modal.defaultProps = {
  show: false,
  zIndex: null,
  children: null,
  onBlur: () => {},
};

export { Modal };

export default window(Modal);
