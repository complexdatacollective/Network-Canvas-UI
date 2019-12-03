import React from 'react';
import { DateTime, Info } from 'luxon';
import { get } from 'lodash';
import { DatePicker, Years, Months, Days } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';
import RangePicker from './RangePicker';

const isEmpty = value =>
  value === null || value === '';

const formatMonth = numericMonth =>
  get(Info.months(), numericMonth - 1, numericMonth);

const getFirstDayOfMonth = dateObj =>
  DateTime.fromObject({ ...dateObj, day: 1 }).toFormat('c');

const asNullObject = keys =>
  keys.reduce((acc, key) => ({ ...acc, [key]: null }), {});

const DatePickerInput = ({
  onChange: onChangeInput,
  parameters,
  value,
}) => {
  const { min, max } = parameters;
  // treat empty string as no value (for Redux Forms)
  const initialDate = isEmpty(value) ? null : value;

  return (
    <div className="date-picker">
      <DatePicker
        onChange={onChangeInput}
        date={initialDate}
        min={min}
        max={max}
      >
        <Panels>
          <Years>
            {({ years, year, set, date, onChange }) => (
              <Panel
                isActive={!set.includes('year')}
                isComplete={set.includes('year')}
                onSelect={() => onChange(asNullObject(['year', 'month', 'day']))}
                preview={date.year}
                type="year"
              >
                <RangePicker
                  type="year"
                  range={years}
                  value={year}
                  offset={years % 5}
                  onChange={y => onChange({ year: y, month: null, day: null })}
                />
              </Panel>
            )}
          </Years>
          <Months>
            {({ months, month, set, date, onChange }) => (
              <Panel
                isActive={set.includes('year') && !set.includes('month')}
                isComplete={set.includes('month')}
                type="month"
                preview={formatMonth(date.month)}
                onSelect={() => onChange(asNullObject(['month', 'day']))}
              >
                <RangePicker
                  type="month"
                  range={months}
                  value={month}
                  format={formatMonth}
                  onChange={m => onChange({ month: m, day: null })}
                />
              </Panel>
            )}
          </Months>
          <Days>
            {({ days, day, set, date, onChange }) => (
              <Panel
                isActive={set.includes('year') && set.includes('month') && !set.includes('day')}
                isComplete={set.includes('day')}
                preview={date.day}
                type="day"
                onSelect={() => onChange(asNullObject(['day']))}
              >
                <RangePicker
                  type="day"
                  range={days}
                  value={day}
                  offset={getFirstDayOfMonth(date) - 1}
                  onChange={d => onChange({ day: d })}
                />
              </Panel>
            )}
          </Days>
        </Panels>
      </DatePicker>
    </div>
  );
};

DatePickerInput.defaultProps = {
  value: null,
  parameters: {
    min: '1973-01-01',
    max: '2019-12-01',
  },
};

export default DatePickerInput;
