import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '../Button';

const getErrorMessage = error =>
  !!error && (error.friendlyMessage ? error.friendlyMessage : error.toString());

const getMessage = ({ error, message }) =>
  (error ? getErrorMessage(error) : message);

const getStack = error => !!error && error.stack;

const renderAdditionalInformation = stack => ([
  <p><strong>Detailed information:</strong></p>,
  <code>{stack}</code>,
]);

/*
 * Designed to present errors to the user. Unlike some other Dialog types user must
 * explicitly click Acknowledge to close.
 */
const ErrorDialog = ({ error, message, onConfirm, show, confirmLabel }) => {
  const stack = getStack(error);

  return (
    <Dialog
      type="error"
      icon="error"
      show={show}
      title="Something went wrong!"
      message={getMessage({ error, message })}
      options={[
        <Button key="confirm" onClick={onConfirm} color="neon-coral" content={confirmLabel} />,
      ]}
    >
      {stack && renderAdditionalInformation(stack)}
    </Dialog>
  );
};

ErrorDialog.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.instanceOf(Error),
    PropTypes.shape({ friendlyMessage: PropTypes.string }),
  ]),
  message: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  show: PropTypes.bool,
};

ErrorDialog.defaultProps = {
  confirmLabel: 'OK',
  message: null,
  error: null,
  show: false,
};

export { ErrorDialog };

export default ErrorDialog;
