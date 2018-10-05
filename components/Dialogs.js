import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import * as DialogVariants from './Dialog';

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
