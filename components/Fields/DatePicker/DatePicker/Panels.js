import { useContext } from 'react';
import DatePickerContext from './DatePickerContext';

const Panels = ({ children }) => {
  const { lastChange } = useContext(DatePickerContext);
  const lastPanelChange = lastChange && Object.keys(lastChange)[0];
  return children({ lastChange: lastPanelChange });
};

export default Panels;
