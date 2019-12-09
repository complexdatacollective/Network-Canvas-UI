import React, { useState, useEffect } from 'react';
import { DatePicker, Years, Months, Days } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';
import RangePicker from './RangePicker';
import DatePreview from './DatePreview';
import { isEmpty, formatMonth, getFirstDayOfMonth, hasProperties } from './helpers';

const DatePickerInput = ({
  onChange: onChangeInput,
  parameters,
  value,
}) => {
  const { min, max } = parameters;
  // treat empty string as no value (for Redux Forms)
  const initialDate = isEmpty(value) ? null : value;
  const [panelsOpen, setPanelsOpen] = useState(false);

  useEffect(() => {
    setPanelsOpen(false);
  }, [value]);

  return (
    <div className="date-picker">
      <DatePicker
        onChange={onChangeInput}
        date={initialDate}
        min={min}
        max={max}
      >
        <DatePreview openEditor={() => setPanelsOpen(true)} />
        <Panels isOpen={panelsOpen}>
          <Years>
            {({ years, year, date, onChange }) => (
              <Panel
                isActive={hasProperties([], ['year'])(date)}
                isComplete={hasProperties(['year'])(date)}
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
            {({ months, month, date, onChange }) => (
              <Panel
                isActive={hasProperties(['year'], ['month'])(date)}
                isComplete={hasProperties(['month'])(date)}
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
            {({ days, day, date, onChange }) => (
              <Panel
                isActive={hasProperties(['year', 'month'])(date)}
                isComplete={hasProperties(['day'])(date)}
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
