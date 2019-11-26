import { useContext } from 'react';
import { range } from 'lodash';
import DatePickerContext from './DatePickerContext';

const Days = ({ children }) => {
  const { onChange, date } = useContext(DatePickerContext);
  const changeHandler = day => onChange(date.set({ day }));
  const days = range(1, date.daysInMonth + 1);
  return children({ days, current: date.day, onChange: changeHandler });
};

export default Days;
