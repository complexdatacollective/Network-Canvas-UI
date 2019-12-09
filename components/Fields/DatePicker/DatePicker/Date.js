import { useContext } from 'react';
import DatePickerContext from './DatePickerContext';

const Date = ({ children }) => {
  const { onChange, date, set } = useContext(DatePickerContext);
  const props = {
    onChange,
    date,
    set,
  };
  return children(props);
};

export default Date;
