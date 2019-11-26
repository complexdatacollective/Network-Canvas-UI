import { useContext } from 'react';
import { range } from 'lodash';
import DatePickerContext from './DatePickerContext';

const Years = ({ children }) => {
  const { onChange, date, min, max } = useContext(DatePickerContext);
  const changeHandler = year => onChange(date.set({ year }));
  const years = range(min.year, max.year + 1);
  return children({ years, current: date.year, onChange: changeHandler });
};

export default Years;
