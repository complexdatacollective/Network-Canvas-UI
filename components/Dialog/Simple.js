import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

/**
 * A relatively unstyled dialog for use in other kinds of modals
 */
const SimpleDialog = ({ children, show, options, title, onBlur, zIndex  }) => {
  const styles = zIndex && { zIndex };

  return (
    <Modal show={show} onBlur={onBlur}>
      <div
        className="dialog dialog--simple"
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

SimpleDialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.element),
  onBlur: PropTypes.func,
  zIndex: PropTypes.number,
};

SimpleDialog.defaultProps = {
  show: false,
  children: null,
  options: [],
  onBlur: () => {},
  zIndex: null,
};

export { SimpleDialog };

export default SimpleDialog;
