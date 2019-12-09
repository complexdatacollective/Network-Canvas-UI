import { range } from 'lodash';

/**
 * Supplies `months` range.
 */
const Months = ({ children }) => {
  const months = range(1, 13);
  const props = {
    months,
  };
  return children(props);
};

export default Months;
