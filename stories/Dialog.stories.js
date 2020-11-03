import React, { useState } from 'react';
import uuid from 'uuid';
import '../src/styles/_all.scss';
import { Dialogs } from '../src/components';

export default { title: 'Dialog' };

export const interaction = () => {
  const [dialogs, setDialogs] = useState([]);

  const addDialog = () => {
    setDialogs([
      ...dialogs,
      {
        id: uuid(),
        type: 'Error',
        error: new Error('message and title are automatic'),
        onConfirm: () => {},
        onCancel: () => {},
      },
    ]);
  };

  return (
    <React.Fragment>
      <button onClick={addDialog}>Open Dialog</button>
      <Dialogs
        dialogs={dialogs}
        closeDialog={id => setDialogs([...dialogs.filter(dialog => dialog.id !== id)])}
      />
    </React.Fragment>
  );
};
