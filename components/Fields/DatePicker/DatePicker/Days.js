import { useContext } from 'react';
import { range } from 'lodash';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';

/**
 * Supplies `days` range based on currently selected month.
 */
const Days = ({ children }) => {
  const { date } = useContext(DatePickerContext);
  const days = range(1, DateTime.fromObject(date).daysInMonth + 1);
  const props = {
    days,
  };
  return children(props);
};

export default Days;
