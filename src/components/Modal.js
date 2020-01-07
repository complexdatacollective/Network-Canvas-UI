import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from './Transitions/Fade';
import Drop from './Transitions/Drop';
import window from './window';

class Modal extends Component {
  handleBlur = (event) => {
    if (event.target !== event.currentTarget) { return; }
    this.props.onBlur(event);
  }

  render() {
    const { children, show, zIndex } = this.props;

    const style = zIndex ? { zIndex } : null;

    return (
      <Fade in={show}>
        <div className="modal" style={style}>
          <div className="modal__background" />
          <div className="modal__content" onClick={this.handleBlur} >
            <Drop in>
              { children }
            </Drop>
          </div>
        </div>
      </Fade>
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
