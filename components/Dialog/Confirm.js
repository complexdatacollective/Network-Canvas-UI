import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '../Button';

/*
 * Designed to present yes/no choices to the user.
 */
const Confirm = ({ title, message, onConfirm, onCancel, show }) => (
  <Dialog
    type="confirm"
    show={show}
    title={title}
    message={message}
    onBlur={onCancel}
    options={[
      <Button key="confirm" onClick={onConfirm} color="mustard" content="Confirm" />,
      <Button key="cancel" onClick={onCancel} color="primary" content="Cancel" />,
    ]}
  />
);

Confirm.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.node,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Confirm.defaultProps = {
  message: null,
  show: false,
};

export { Confirm };

export default Confirm;
