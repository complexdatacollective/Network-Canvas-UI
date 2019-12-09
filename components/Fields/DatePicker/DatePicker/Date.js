import { useContext } from 'react';
import { range } from 'lodash';
import { DateTime } from 'luxon';
import DatePickerContext from './DatePickerContext';
import { isComplete, isEmpty } from './helpers';

const Date = ({ children }) => {
  const { onChange, date, min, max, type } = useContext(DatePickerContext);

  const years = range(min.year, max.year + 1);
  const months = range(1, 13);
  const days = range(1, DateTime.fromObject(date).daysInMonth + 1);

  const props = {
    onChange,
    date,
    years,
    months,
    days,
    type,
    isComplete: isComplete(type)(date),
    isEmpty: isEmpty(type)(date),
  };
  return children(props);
};

export default Date;
