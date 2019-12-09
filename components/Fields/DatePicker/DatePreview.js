import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Date } from './DatePicker/';
import { formatMonth } from './helpers';

const DatePreview = ({ onClickDate }) => (
  <Date>
    {({ date, type, onChange }) => {
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
          <div
            className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.year })}
            onClick={handleClickYear}
          >
            {date.year || 'year'}
          </div>
          { ['full', 'month'].includes(type) &&
            <div className="date-picker__preview-divider">/</div>
          }
          { ['full', 'month'].includes(type) &&
            <div
              className={cx('date-picker__preview-part', { 'date-picker__preview-part--is-set': date.month })}
              onClick={handleClickMonth}
            >
              {formatMonth(date.month) || 'month'}
            </div>
          }
          { ['full'].includes(type) &&
            <div className="date-picker__preview-divider">/</div>
          }
          { ['full'].includes(type) &&
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
