import { useContext } from 'react';
import { range } from 'lodash';
import DatePickerContext from './DatePickerContext';

const Months = ({ children }) => {
  const { onChange, date } = useContext(DatePickerContext);
  const months = range(1, 13);
  const props = {
    months,
    month: date.month,
    onChange,
    date,
  };
  return children(props);
};

export default Months;
