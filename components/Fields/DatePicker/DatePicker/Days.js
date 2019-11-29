import { useContext } from 'react';
import { range } from 'lodash';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';

const Days = ({ children }) => {
  const { onChange, date } = useContext(DatePickerContext);
  const changeHandler = day => onChange({ day });
  const days = range(1, DateTime.fromObject(date).daysInMonth + 1);
  return children({ days, current: date.day, onChange: changeHandler });
};

export default Days;
