/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../DatePicker';
import Days from '../Days';

const getSubject = (props) => {
  const mockFunctionalComponent = jest.fn(() => null);

  mount((
    <DatePicker {...props}>
      <Days>{mockFunctionalComponent}</Days>
    </DatePicker>
  ));

  return mockFunctionalComponent;
};

describe('<Days>', () => {
  it('provides days in month for selected date', () => {
    const subject = getSubject({ date: '2019-12-01' });

    expect(subject.mock.calls[0][0]).toMatchObject({
      days: [
        1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28,
        29, 30, 31,
      ],
    });

    const shortMonth = getSubject({ date: '2019-02-01' });

    expect(shortMonth.mock.calls[0][0]).toMatchObject({
      days: [
        1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28,
      ],
    });
  });
});
