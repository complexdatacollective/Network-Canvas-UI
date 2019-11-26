import { useContext } from 'react';
import { range } from 'lodash';
import DatePickerContext from './DatePickerContext';

const Months = ({ children }) => {
  const { onChange, date } = useContext(DatePickerContext);
  const changeHandler = month => onChange(date.set({ month }));
  const months = range(1, 13);
  return children({ months, current: date.month, onChange: changeHandler });
};

export default Months;
