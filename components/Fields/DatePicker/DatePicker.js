import React, { useState } from 'react';
import { DatePicker, Years, Months, Days } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';
import RangePicker from './RangePicker';
import DatePreview from './DatePreview';
import { isEmpty, formatMonth, getFirstDayOfMonth } from './helpers';

const DatePickerInput = ({
  onChange: onChangeInput,
  parameters,
  value,
}) => {
  const { min, max } = parameters;
  // treat empty string as no value (for Redux Forms)
  const initialDate = isEmpty(value) ? null : value;
  const [isOpen, toggleOpen] = useState(true);

  return (
    <div className="date-picker">
      <DatePicker
        onChange={onChangeInput}
        date={initialDate}
        min={min}
        max={max}
      >
        <DatePreview />
        <Panels>
          <Years>
            {({ years, year, set, date, onChange }) => (
              <Panel
                isActive={!set.includes('year')}
                isComplete={set.includes('year')}
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
                isActive={set.includes('year') && set.includes('month')}
                isComplete={set.includes('day')}
                type="day"
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
