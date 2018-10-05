import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';

const Notice = ({ title, text, onConfirm, show }) => (
  <Dialog
    type="notice"
    title={`NOTICE: ${title}`}
    show={show}
    options={[<button key="confirm" onClick={onConfirm}>OK</button>]}
    onBlur={onConfirm}
  >
    {text}
  </Dialog>
);

Notice.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Notice.defaultProps = {
  title: null,
  show: false,
};

export { Notice };

export default Notice;
