/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../DatePicker';
import Months from '../Months';

const getSubject = (props) => {
  const mockFunctionalComponent = jest.fn(() => null);

  mount((
    <DatePicker {...props}>
      <Months>{mockFunctionalComponent}</Months>
    </DatePicker>
  ));

  return mockFunctionalComponent;
};

describe('<Months>', () => {
  it('provides months', () => {
    const subject = getSubject();

    expect(subject.mock.calls[0][0]).toMatchObject({
      months: [
        1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12,
      ],
    });
  });
});
