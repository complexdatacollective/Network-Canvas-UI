import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '../Button';

/*
 * Designed to present warnings to the user. Unlike some other Dialog types user
 * must explicitly click Acknowledge to close.
 */
const Warning = ({ title, message, onConfirm, onCancel, confirmLabel, cancelLabel, show }) => (
  <Dialog
    type="warning"
    icon="warning"
    show={show}
    title={title}
    message={message}
    options={[
      onCancel ? <Button key="cancel" onClick={onCancel} color="navy-taupe" content={cancelLabel} /> : null,
      <Button key="confirm" onClick={onConfirm} color="mustard" content={confirmLabel} />,
    ]}
  />
);

Warning.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.node,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  confirmLabel: PropTypes.text,
  cancelLabel: PropTypes.text,
  show: PropTypes.bool,
};

Warning.defaultProps = {
  message: null,
  onCancel: null,
  confirmLabel: 'OK',
  cancelLabel: 'Cancel',
  show: false,
};

export { Warning };

export default Warning;
