import React from 'react';
import { Info } from 'luxon';
import { get } from 'lodash';
import { DatePicker, Years, Months, Days } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';
import RangePicker from './RangePicker';
import './DatePicker.scss';

const isRFEmpty = value =>
  value === null || value === '';

const formatMonth = value =>
  get(Info.months(), value - 1, value);

const DatePickerInput = ({
  onChange: onChangeInput,
  parameters,
  value,
}) => {
  const { min, max } = parameters;
  // treat empty string as no value
  const initialDate = isRFEmpty(value) ? null : value;

  return (
    <DatePicker
      onChange={onChangeInput}
      date={initialDate}
      min={min}
      max={max}
    >
      <Panels>
        <Years>
          {({ years, year, set, onChange }) => (
            <Panel
              isActive={!set.includes('year')}
              isComplete={set.includes('year')}
            >
              <RangePicker
                type="year"
                range={years}
                value={year}
                onChange={y => onChange({ year: y, month: null, day: null })}
              />
            </Panel>
          )}
        </Years>
        <Months>
          {({ months, month, set, date, onReset, onChange }) => (
            <Panel
              isActive={set.includes('year') && !set.includes('month')}
              isComplete={set.includes('month')}
              label={date.year}
              onBack={() => onReset(['year', 'month', 'day'])}
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
          {({ days, day, set, date, onReset, onChange }) => (
            <Panel
              isActive={set.includes('year') && set.includes('month')}
              label={date.month && `${date.year} ${formatMonth(date.month)}`}
              onBack={() => onReset(['month', 'day'])}
            >
              <RangePicker
                type="day"
                range={days}
                value={day}
                onChange={d => onChange({ day: d })}
              />
            </Panel>
          )}
        </Days>
      </Panels>
    </DatePicker>
  );
};

DatePickerInput.defaultProps = {
  value: null,
  parameters: {
    min: '1970-01-01',
    max: '2019-12-01',
  },
};

export default DatePickerInput;
