import React from 'react';
import Harness from './helpers/Harness';
import ToastManager from '../src/components/Toast/ToastManager';

import '../src/styles/_all.scss';

const requiredProps = {
};

export default { title: 'Toast Manager' };

export const normal = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {props => <ToastManager {...props} />}
  </Harness>
);
