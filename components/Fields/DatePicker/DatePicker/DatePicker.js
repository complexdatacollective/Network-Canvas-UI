import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateTime, Interval } from 'luxon';
import DatePickerContext from './DatePickerContext';
import { DATE_FORMATS, DEFAULT_TYPE, DEFAULT_MIN_DATE } from './config';
import { now, isComplete, isEmpty } from './helpers';

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

const DatePicker = ({
  children,
  ...props
}) => {
  const [pickerState, setPickerState] = useState({
    date: getDate(props.date),
  });

  const format = DATE_FORMATS[props.type];

  const min = props.min ?
    DateTime.fromISO(props.min) :
    now().minus(DEFAULT_MIN_DATE);

  const max = props.max ?
    DateTime.fromISO(props.max) :
    now();

  const range = Interval.fromDateTimes(min.startOf('day'), max.endOf('day'));

  const onChange = (values) => {
    const newDate = Object.assign({}, pickerState.date, values);

    setPickerState(state => ({
      ...state,
      date: newDate,
    }));

    if (isEmpty(props.type)(newDate)) {
      props.onChange('');
      return;
    }

    if (isComplete(props.type)(newDate)) {
      const dateString = DateTime.fromObject(newDate).toFormat(format);
      props.onChange(dateString);
    }
  };

  const context = {
    onChange,
    range,
    type: props.type,
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
  type: DEFAULT_TYPE,
  min: null,
  max: null,
  onChange: () => {},
};

DatePicker.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  type: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
