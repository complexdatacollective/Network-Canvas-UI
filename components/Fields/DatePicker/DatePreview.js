import React from 'react';
import cx from 'classnames';
import { Date } from './DatePicker/';
import { formatMonth } from './helpers';

const DatePreview = ({ openEditor }) => (
  <Date>
    {({ date, onChange }) => {
      const resetYear = () => {
        openEditor();
        onChange({ year: null, month: null, day: null });
      };

      const resetMonth = () => {
        openEditor();
        onChange({ month: null, day: null });
      };

      const resetDay = () => {
        openEditor();
        onChange({ day: null });
      };

      return (
        <div className="date-picker__preview">
          <div
            className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.year })}
            onClick={resetYear}
          >
            {date.year || 'year'}
          </div>
          <span>/</span>
          <div
            className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.month })}
            onClick={resetMonth}
          >
            {formatMonth(date.month) || 'month'}
          </div>
          <span>/</span>
          <div
            className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.day })}
            onClick={resetDay}
          >
            {date.day || 'day'}
          </div>
        </div>
      );
    }}
  </Date>
);

  export default DatePreview;
