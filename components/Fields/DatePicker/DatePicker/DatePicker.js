import React from 'react';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';
import './DatePicker.scss';

export const DATE_FORMAT = 'yyyy-MM-dd';

const DatePicker = ({
  children,
  ...props,
}) => {
  const now = DateTime.local();
  const min = props.min ?
    DateTime.fromISO(props.min) :
    '1970-01-01';
  const max = props.max ?
    DateTime.fromISO(props.max) :
    now;
  const date = props.date ?
    DateTime.fromISO(props.date) : null;

  const onChange = (newDate) => {
    props.onChange(newDate.toFormat(DATE_FORMAT));
  };

  const context = {
    onChange,
    date,
    min,
    max,
  };

  return (
    <DatePickerContext.Provider value={context}>
      {children}
    </DatePickerContext.Provider>
  );
};

export default DatePicker;
