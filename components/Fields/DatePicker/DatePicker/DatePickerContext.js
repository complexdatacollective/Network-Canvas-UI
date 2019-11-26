import React from 'react';

const DatePickerContext = React.createContext({
  onChange: () => {},
  min: null,
  max: null,
  date: null,
});

export default DatePickerContext;
