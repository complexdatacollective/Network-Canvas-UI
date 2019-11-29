import React, { useState } from 'react';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';
import './DatePicker.scss';

export const DATE_FORMAT = 'yyyy-MM-dd';

const DatePicker = ({
  children,
  ...props,
}) => {
  const [lastChange, setLastChange] = useState(null);
  const now = DateTime.local();
  const min = props.min ?
    DateTime.fromISO(props.min) :
    '1970-01-01';
  const max = props.max ?
    DateTime.fromISO(props.max) :
    now;
  const date = props.date ?
    DateTime.fromISO(props.date).toObject() : now.toObject();

  console.log(date);

  // const onChange = (newDate) => {
  //   props.onChange(newDate.toFormat(DATE_FORMAT));
  // };
  const onChange = (values) => {
    const newDate = DateTime.fromObject(date).set(values);
    props.onChange(newDate.toFormat(DATE_FORMAT));
    setLastChange(values, newDate);
  };

  const context = {
    onChange,
    date,
    min,
    max,
    lastChange,
  };

  return (
    <DatePickerContext.Provider value={context}>
      {children}
    </DatePickerContext.Provider>
  );
};

export default DatePicker;
