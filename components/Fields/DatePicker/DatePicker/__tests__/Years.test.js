/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '../DatePicker';
import Years from '../Years';

const getSubject = (props) => {
  const mockFunctionalComponent = jest.fn(() => null);

  mount((
    <DatePicker {...props}>
      <Years>{mockFunctionalComponent}</Years>
    </DatePicker>
  ));

  return mockFunctionalComponent;
};

describe('<Years>', () => {
  it('provides years from min to max', () => {
    const subject = getSubject({
      min: '1977-07-07',
      max: '1989-09-09',
    });

    expect(subject.mock.calls[0][0]).toMatchObject({
      years: [
        1989, 1988, 1987, 1986,
        1985, 1984, 1983, 1982, 1981,
        1980, 1979, 1978, 1977,
      ],
    });
  });
});
