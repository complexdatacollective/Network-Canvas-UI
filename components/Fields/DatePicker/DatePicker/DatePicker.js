import React, { useState } from 'react';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';

export const DATE_FORMAT = 'yyyy-MM-dd';

const trimDate = (dateObject) => {
  const { year, month, day } = dateObject;
  return { year, month, day };
};

const getDate = (dateString) => {
  const date = dateString ?
    DateTime.fromISO(dateString).toObject() :
    {
      month: null,
      day: null,
      year: null,
    };
  return trimDate(date);
};

const isComplete = ({ day, month, year }, { setDay, setMonth, setYear }) => (
  (!setDay || day) &&
  (!setMonth || month) &&
  (!setYear || year)
);

const DatePicker = ({
  children,
  ...props
}) => {
  const [pickerState, setPickerState] = useState({
    date: getDate(props.date),
    changed: [],
  });
  const now = DateTime.local();
  const min = props.min ?
    DateTime.fromISO(props.min) :
    DateTime.fromISO('1970-01-01');
  const max = props.max ?
    DateTime.fromISO(props.max) :
    now;

  const onChange = (values) => {
    const newDate = Object.assign({}, pickerState.date, values);

    const changed = Object.keys(values);

    setPickerState(state => ({
      ...state,
      changed,
      date: newDate,
    }));

    if (isComplete(newDate, props)) {
      const dateString = DateTime.fromObject(newDate)
        .toFormat(DATE_FORMAT);
      props.onChange(dateString);
    }
  };

  const context = {
    onChange,
    min,
    max,
    ...pickerState,
  };

  return (
    <DatePickerContext.Provider value={context}>
      {children}
    </DatePickerContext.Provider>
  );
};

DatePicker.defaultProps = {
  setYear: true,
  setMonth: true,
  setDay: true,
};

export default DatePicker;
