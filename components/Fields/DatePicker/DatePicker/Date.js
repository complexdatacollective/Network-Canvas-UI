import { useContext } from 'react';
import DatePickerContext from './DatePickerContext';
import { isComplete, isEmpty } from './helpers';

const Date = ({ children }) => {
  const { onChange, date, type } = useContext(DatePickerContext);

  return children({
    onChange,
    date,
    type,
    isComplete: isComplete(type)(date),
    isEmpty: isEmpty(type)(date),
  });
};

export default Date;
