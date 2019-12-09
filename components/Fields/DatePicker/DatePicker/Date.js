import { useContext } from 'react';
import { range } from 'lodash';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';

const Date = ({ children }) => {
  const { onChange, date, min, max, set } = useContext(DatePickerContext);

  const years = range(min.year, max.year + 1);
  const months = range(1, 13);
  const days = range(1, DateTime.fromObject(date).daysInMonth + 1);

  const props = {
    onChange,
    date,
    years,
    months,
    days,
    set,
  };
  return children(props);
};

export default Date;
