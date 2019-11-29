import { useContext } from 'react';
import { range } from 'lodash';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';

const Days = ({ children }) => {
  const { onChange, onReset, date, set } = useContext(DatePickerContext);
  const days = range(1, DateTime.fromObject(date).daysInMonth + 1);
  const props = {
    days,
    day: date.day,
    onReset,
    onChange,
    date,
    set,
  };
  return children(props);
};

export default Days;
