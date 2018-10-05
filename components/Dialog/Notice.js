import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '../Button';

/*
 * Designed to present notices to the user.
 */
const Notice = ({ title, message, onConfirm, show }) => (
  <Dialog
    type="info"
    show={show}
    title={title}
    message={message}
    onBlur={onConfirm}
    options={[
      <Button key="confirm" onClick={onConfirm} color="primary" content="Acknowledge" />,
    ]}
  />
);

Notice.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.node,
  onConfirm: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Notice.defaultProps = {
  message: null,
  show: false,
};

export { Notice };

export default Notice;
