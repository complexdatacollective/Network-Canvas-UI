import { range } from 'lodash';

/**
 * Supplies `months` range.
 */
const Months = ({ children }) => {
  const months = range(1, 13);
  return children({ months });
};

export default Months;
