import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Date } from './DatePicker/';
import { formatMonth } from './helpers';

const DatePreview = ({ onClickDate }) => (
  <Date>
    {({ date, set, onChange }) => {
      const handleClickYear = () => {
        onClickDate();
        onChange({ year: null, month: null, day: null });
      };

      const handleClickMonth = () => {
        onClickDate();
        onChange({ month: null, day: null });
      };

      const handleClickDay = () => {
        onClickDate();
        onChange({ day: null });
      };

      return (
        <div className="date-picker__preview">
          { set.year &&
            <div
              className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.year })}
              onClick={handleClickYear}
            >
              {date.year || 'year'}
            </div>
          }
          { set.year && set.month &&
            <div className="date-picker__preview-divider">/</div>
          }
          { set.month &&
            <div
              className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.month })}
              onClick={handleClickMonth}
            >
              {formatMonth(date.month) || 'month'}
            </div>
          }
          { set.month && set.day &&
            <div className="date-picker__preview-divider">/</div>
          }
          { set.day &&
            <div
              className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.day })}
              onClick={handleClickDay}
            >
              {date.day || 'day'}
            </div>
          }
        </div>
      );
    }}
  </Date>
);

DatePreview.propTypes = {
  onClickDate: PropTypes.func,
};

DatePreview.defaultProps = {
  onClickDate: () => {},
};

export default DatePreview;
