import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Years, Months, Days, Date } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';
import RangePicker from './RangePicker';
import DatePreview from './DatePreview';
import { isEmpty, formatMonth, getFirstDayOfMonth, hasProperties } from './helpers';

const defaultParameters = {
  year: true,
  month: true,
  day: true,
};

const DatePickerInput = ({
  onChange: onChangeInput,
  parameters,
  value,
}) => {
  const { min, max, year, month, day } = Object.assign(
    {},
    defaultParameters,
    parameters,
  );
  // treat empty string as no value (for Redux Forms)
  const initialDate = isEmpty(value) ? null : value;
  const [panelsOpen, setPanelsOpen] = useState(false);

  useEffect(() => {
    setPanelsOpen(false);
  }, [value]);

  const handleClickDate = () => setPanelsOpen(true);

  return (
    <div className="date-picker">
      <DatePicker
        onChange={onChangeInput}
        date={initialDate}
        min={min}
        max={max}
        set={{ year, month, day }}
      >
        <DatePreview onClickDate={handleClickDate} />
        <Date>
          {({ date, onChange }) => (
            <Panels isOpen={panelsOpen}>
              <Panel
                isActive={hasProperties([], ['year'])(date)}
                isComplete={hasProperties(['year'])(date)}
                type="year"
              >
                <Years>
                  {({ years }) => (
                    <RangePicker
                      type="year"
                      range={years}
                      value={date.year}
                      offset={years % 5}
                      onChange={y => onChange({ year: y, month: null, day: null })}
                    />
                  )}
                </Years>
              </Panel>
              <Panel
                isActive={hasProperties(['year'], ['month'])(date)}
                isComplete={hasProperties(['month'])(date)}
                type="month"
              >
                <Months>
                  {({ months }) => (
                    <RangePicker
                      type="month"
                      range={months}
                      value={date.month}
                      format={formatMonth}
                      onChange={m => onChange({ month: m, day: null })}
                    />
                  )}
                </Months>
              </Panel>
              <Panel
                isActive={hasProperties(['year', 'month'])(date)}
                isComplete={hasProperties(['day'])(date)}
                type="day"
              >
                <Days>
                  {({ days }) => (
                    <RangePicker
                      type="day"
                      range={days}
                      value={date.day}
                      offset={getFirstDayOfMonth(date) - 1}
                      onChange={d => onChange({ day: d })}
                    />
                  )}
                </Days>
              </Panel>
            </Panels>
          )}
        </Date>
      </DatePicker>
    </div>
  );
};

DatePickerInput.defaultProps = {
  value: null,
  parameters: {},
  onChange: () => {},
};

DatePickerInput.propTypes = {
  onChange: PropTypes.func,
  parameters: PropTypes.object,
  value: PropTypes.string,
};

export default DatePickerInput;
