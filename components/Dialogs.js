import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import * as DialogVariants from './Dialog';

/*
 * Displays a stack of Dialogs.
 *
 * <Dialogs dialogs closeDialog />
 *
 * `closeDialog` called when Dialog is cancelled or confirmed, may be used to track
 * state.
 *
 * `dialogs` prop in the format (note many of the props simple map
 * to the specific Dialog type):
 *
 * dialogs: [
 *   {
 *     id: '1234-1234-1',
 *     type: 'Confirm',
 *     title: 'Something to confirm',
 *     message: 'More detail about confirmation',
 *     confirm: () => {},
 *     cancel: () => {},
 *   },
 *   {
 *     id: '1234-1234-2',
 *     type: 'Notice',
 *     title: 'Something info for the user',
 *     message: 'More detail...',
 *     confirm: () => {},
 *   },
*   {
 *     id: '1234-1234-3',
 *     type: 'Warning',
 *     title: 'Something to warn the user about, maybe a non-failing error',
 *     message: 'More detail...',
 *     confirm: () => {},
 *   },
 *   {
 *     id: '1234-1234-4',
 *     type: 'Error',
 *     error: new Error('message and title are automatic'),
 *     confirm: () => {},
 *     cancel: () => {},
 *   },
 * ]
 */
class Dialogs extends Component {
  static propTypes = {
    dialogs: PropTypes.array,
    closeDialog: PropTypes.func.isRequired,
  }

  static defaultProps = {
    dialogs: [],
  };

  get dialogs() {
    return this.props.dialogs;
  }

  handleConfirm = (dialog) => {
    if (dialog.confirm) { dialog.confirm(dialog); }
    this.props.closeDialog(dialog.id);
  }

  handleCancel = (dialog) => {
    if (dialog.cancel) { dialog.cancel(dialog); }
    this.props.closeDialog(dialog.id);
  }

  renderDialog = (dialog) => {
    const Dialog = DialogVariants[dialog.type];

    return (
      <Dialog
        show
        key={dialog.id}
        onConfirm={() => this.handleConfirm(dialog)}
        onCancel={() => this.handleCancel(dialog)}
        {...omit(dialog, ['confirm', 'cancel'])}
      />
    );
  }

  render() {
    return this.dialogs.map(this.renderDialog);
  }
}

export { Dialogs };

export default Dialogs;
