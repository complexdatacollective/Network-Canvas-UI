import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';
import { DATE_FORMAT, DEFAULT_MIN_DATE } from './config';
import { now } from './helpers';

/**
 * Get date object from an ISO string
 */
const getDate = (dateString) => {
  const { year, month, day } = dateString ?
    DateTime.fromISO(dateString).toObject() :
    {
      month: null,
      day: null,
      year: null,
    };
  return { year, month, day };
};

/**
 * Is date object fully complete?
 */
const isComplete = ({ set }) =>
  ({ day, month, year }) => (
    (!set.day || day) &&
    (!set.month || month) &&
    (!set.year || year)
  );

const DatePicker = ({
  children,
  ...props
}) => {
  const [pickerState, setPickerState] = useState({
    date: getDate(props.date),
  });

  const min = props.min ?
    DateTime.fromISO(props.min) :
    DateTime.fromISO(DEFAULT_MIN_DATE);

  const max = props.max ?
    DateTime.fromISO(props.max) :
    now().toFormat(DATE_FORMAT);

  const onChange = (values) => {
    const newDate = Object.assign({}, pickerState.date, values);

    setPickerState(state => ({
      ...state,
      date: newDate,
    }));

    if (isComplete(props)(newDate)) {
      const dateString = DateTime.fromObject(newDate)
        .toFormat(DATE_FORMAT);
      props.onChange(dateString);
    }
  };

  const context = {
    onChange,
    min,
    max,
    set: props.set,
    ...pickerState,
  };

  return (
    <DatePickerContext.Provider value={context}>
      {children}
    </DatePickerContext.Provider>
  );
};

DatePicker.defaultProps = {
  children: null,
  setYear: true,
  setMonth: true,
  setDay: true,
  min: null,
  max: null,
  onChange: () => {},
};

DatePicker.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
