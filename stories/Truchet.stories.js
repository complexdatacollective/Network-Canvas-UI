/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../src/styles/_all.scss';
import TruchetBackground from '../src/components/Art/TruchetBackground';

const requiredProps = {
};

export default { title: 'Art/Truchet Pattern' };

export const normal = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
    <TruchetBackground />
  </div>
);
