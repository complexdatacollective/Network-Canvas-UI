import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';

const Warning = ({ title, text, onConfirm, show }) => (
  <Dialog
    type="warning"
    title={`WARNING: ${title}`}
    show={show}
    options={[<button key="confirm" onClick={onConfirm}>OK</button>]}
    onBlur={onConfirm}
  >
    {text}
  </Dialog>
);

Warning.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Warning.defaultProps = {
  title: null,
  show: false,
};

export { Warning };

export default Warning;
