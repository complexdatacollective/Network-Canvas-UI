import React from 'react';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';
import './DatePicker.scss';

const DatePicker = ({
  children,
  ...props,
}) => {
  const min = DateTime.fromISO(props.min);
  const max = DateTime.fromISO(props.max);
  const date = props.date ? DateTime.fromISO(props.date) : max;

  const onChange = (newDate) => {
    props.onChange(newDate.toISO());
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
