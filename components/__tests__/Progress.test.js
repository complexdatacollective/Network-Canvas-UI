/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Progress from '../Progress';

describe('Progress', () => {
  it('renders a determinate progress bar', () => {
    const subject = shallow(<Progress max={100} value={50} />);
    const progress = subject.find('progress');
    expect(progress).toHaveLength(1);
    expect(progress.prop('value')).toBe(50);
    expect(progress.prop('className')).not.toMatch('indeterminate');
  });

  it('defaults to a 0% progress bar', () => {
    const subject = shallow(<Progress />);
    const progress = subject.find('progress');
    expect(progress.prop('value')).toBe(0);
  });

  it('renders an indeterminate progress bar', () => {
    const subject = shallow(<Progress value={null} />);
    const progress = subject.find('.progress');
    expect(progress.prop('className')).toMatch('indeterminate');
    expect(progress.props()).not.toHaveProperty('value');
  });
});
