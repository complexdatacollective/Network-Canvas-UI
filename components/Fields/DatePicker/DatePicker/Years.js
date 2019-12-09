import { useContext } from 'react';
import { range } from 'lodash';
import DatePickerContext from './DatePickerContext';

/**
 * Supplies `years` range based on min/max props.
 */
const Years = ({ children }) => {
  const { min, max } = useContext(DatePickerContext);
  const years = range(min.year, max.year + 1);

  const props = {
    years,
  };

  return children(props);
};

export default Years;
