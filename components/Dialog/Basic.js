import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const BasicDialog = ({ children, show, options, title, onBlur, zIndex  }) => {
  const styles = zIndex && { zIndex };

  return (
    <Modal show={show} onBlur={onBlur}>
      <div
        className="dialog dialog--generic"
        style={styles}
      >
        <div className="dialog__main">
          <div className="dialog__main-content">
            <h2 className="dialog__main-title">{title}</h2>
            {children}
          </div>
        </div>
        <footer className="dialog__footer">
          {options}
        </footer>
      </div>
    </Modal>
  );
};

BasicDialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.element),
  onBlur: PropTypes.func,
};

BasicDialog.defaultProps = {
  show: false,
  children: null,
  options: [],
  onBlur: () => {},
};

export { BasicDialog };

export default BasicDialog;
