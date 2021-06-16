import React from 'react';
import faker from 'faker';
import Scroller from '../src/components/Scroller';
import '../src/styles/_all.scss';

export default {
  title: 'Utilities/Scroller',
  args: {
    children: [...new Array(20)]
      .map((_, index) => (<p key={index}>{faker.lorem.paragraph(20)}</p>)),
  },
  argTypes: { onScroll: { action: 'scrolled' } },
};

export const renders = (props) => (
  <div style={{ height: 600, display: 'flex' }}>
    <Scroller {...props} />
  </div>
);
renders.args = {};

export const rendersHeading = (props) => (
  <h1>
    <Scroller {...props} />
  </h1>
);
rendersHeading.args = {
  children: 'Eulogy for an Adolescence Shattered Against Elliot Street Pavement - Heres to Being Young!',
};
