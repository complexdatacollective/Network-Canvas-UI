import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '../Button';

const getErrorMessage = error =>
  !!error && (error.friendlyMessage ? error.friendlyMessage : error.toString());

const getMessage = ({ error, message }) =>
  (error ? getErrorMessage(error) : message);

const getStack = error => !!error && error.stack;

const renderAdditionalInformation = stack => (
  <React.Fragment>
    <p><strong>Detailed information:</strong></p>
    <pre className="error__stack-trace">{stack}</pre>
  </React.Fragment>
);

/*
 * Designed to present errors to the user. Unlike some other Dialog types user must
 * explicitly click Acknowledge to close.
 */
const ErrorDialog = ({ error, message, onConfirm, show, confirmLabel, title }) => {
  const stack = getStack(error);

  return (
    <Dialog
      type="error"
      icon="error"
      show={show}
      title={title}
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
    PropTypes.string,
    PropTypes.shape({ friendlyMessage: PropTypes.string }),
  ]),
  title: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onConfirm: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  show: PropTypes.bool,
};

ErrorDialog.defaultProps = {
  confirmLabel: 'OK',
  title: 'Something went wrong!',
  message: null,
  error: null,
  show: false,
};

export { ErrorDialog };

export default ErrorDialog;
