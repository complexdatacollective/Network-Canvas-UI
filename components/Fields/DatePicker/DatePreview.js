import React from 'react';
import { Date } from './DatePicker/';
import { formatMonth, asNullObject } from './helpers';

const DatePreview = () => (
  <Date>
    {({ date, onChange }) => (
      <div className="date-picker__preview">
        <div onClick={() => onChange(asNullObject(['year', 'month', 'day']))}>
          {date.year || 'year'}
        </div>
        <div onClick={() => onChange(asNullObject(['month', 'day']))}>
          {formatMonth(date.month) || 'month'}
        </div>
        <div onClick={() => onChange(asNullObject(['day']))}>
          {date.day || 'day'}
        </div>
      </div>
    )}
  </Date>
);

  export default DatePreview;
