import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';

const Confirm = ({ title, text, onConfirm, onCancel, show }) => (
  <Dialog
    type="confirm"
    title={`CONFIRM: ${title}`}
    show={show}
    options={[
      <button key="confirm" onClick={onConfirm}>OK</button>,
      <button key="cancel" onClick={onCancel}>CANCEL</button>,
    ]}
    onBlur={onCancel}
  >
    {text}
  </Dialog>
);

Confirm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Confirm.defaultProps = {
  title: null,
  show: false,
};

export { Confirm };

export default Confirm;
