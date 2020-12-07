import React from 'react';
import faker from 'faker';
import Harness from './helpers/Harness';
import Scroller from '../src/components/Scroller';
import '../src/styles/_all.scss';

const requiredProps = {
  children: [...new Array(20)].map((_, index) => (<p key={index}>{faker.lorem.paragraph(20)}</p>)),
};

export default { title: 'Utilities/Scroller' };

export const renders = () => {
  return (
    <Harness
      requiredProps={requiredProps}
    >
      {
        props =>
          (<Scroller {...props} />)
      }
    </Harness>
  );
};

export const rendersHeading = () => (
  <Harness
    requiredProps={requiredProps}
  >
    {
      props =>
        (<h1><Scroller {...props}>
          Eulogy for an Adolescence Shattered Against Elliot Street Pavement - Heres to Being Young!
        </Scroller></h1>)
    }
  </Harness>
);
