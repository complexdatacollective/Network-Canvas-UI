import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';
import { DATE_FORMAT, DEFAULT_MIN_DATE } from './config';
import { now } from './helpers';

const defaultSet = {
  month: true,
  day: true,
};

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
const isComplete = set =>
  ({ day, month, year }) => (
    (!set.day || day) &&
    (!set.month || month) &&
    year
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

  const set = Object.assign({}, defaultSet, props.set);

  // If day is required, month cannot be omitted.
  if (set.day) { set.month = true; }

  const onChange = (values) => {
    const newDate = Object.assign({}, pickerState.date, values);

    setPickerState(state => ({
      ...state,
      date: newDate,
    }));

    if (isComplete(set)(newDate)) {
      const dateString = DateTime.fromObject(newDate)
        .toFormat(DATE_FORMAT);
      props.onChange(dateString);
    }
  };

  const context = {
    onChange,
    min,
    max,
    set,
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
  set: {},
  min: null,
  max: null,
  onChange: () => {},
};

DatePicker.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  set: PropTypes.object,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
