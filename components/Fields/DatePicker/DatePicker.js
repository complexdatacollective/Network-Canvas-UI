import React from 'react';
import { DatePicker, Years, Months, Days } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';

const isRFEmpty = value =>
  value === null || value === '';

const Day = ({ day, active, onChange }) => (
  <div
    className="date-picker__day"
    style={{ backgroundColor: active && 'red' }}
    onClick={() => onChange(day)}
  >{day}</div>
);

const Month = ({ month, active, onChange }) => (
  <div
    className="date-picker__month"
    style={{ backgroundColor: active && 'red' }}
    onClick={() => onChange(month)}
  >{month}</div>
);

const Year = ({ year, active, onChange }) => (
  <div
    className="date-picker__year"
    style={{ backgroundColor: active && 'red' }}
    onClick={() => onChange(year)}
  >{year}</div>
);

const DatePickerInput = ({
  onChange,
  parameters,
  value,
}) => {
  const { min, max } = parameters;
  // treat empty string as no value
  const date = isRFEmpty(value) ? null : value;

  return (
    <DatePicker
      onChange={onChange}
      date={date}
      min={min}
      max={max}
    >
      <Panels>
        <Panel>
          <Years>
            {({ years, current, ...yearsProps }) => (
              <div className="date-picker__years">
                {years.map(year => (
                  <Year
                    year={year}
                    active={current === year}
                    {...yearsProps}
                  />
                ))}
              </div>
            )}
          </Years>
        </Panel>
        <Panel>
          <Months>
            {({ months, current, ...monthsProps }) => (
              <div className="date-picker__months">
                {months.map(month => (
                  <Month
                    month={month}
                    active={current === month}
                    {...monthsProps}
                  />
                ))}
              </div>
            )}
          </Months>
        </Panel>
        <Panel>
          <Days>
            {({ days, current, ...daysProps }) => (
              <div className="date-picker__days">
                {days.map(day => (
                  <Day
                    day={day}
                    active={current === day}
                    {...daysProps}
                  />
                ))}
              </div>
            )}
          </Days>
        </Panel>
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
