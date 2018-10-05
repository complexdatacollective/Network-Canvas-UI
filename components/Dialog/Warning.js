import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '../Button';

/*
 * Designed to present warnings to the user. Unlike some other Dialog types user
 * must explicitly click Acknowledge to close.
 */
const Warning = ({ title, message, onConfirm, show }) => (
  <Dialog
    type="warning"
    show={show}
    title={title}
    message={message}
    options={[
      <Button key="confirm" onClick={onConfirm} color="primary" content="Acknowledge" />,
    ]}
  />
);

Warning.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.node,
  onConfirm: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Warning.defaultProps = {
  message: null,
  show: false,
};

export { Warning };

export default Warning;
