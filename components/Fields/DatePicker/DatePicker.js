import React from 'react';
import { DatePicker, Years, Months, Days } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';
import './DatePicker.scss';

const isRFEmpty = value =>
  value === null || value === '';

const Day = ({ day, isActive, onChange }) => (
  <div
    className="date-picker__day"
    style={{ backgroundColor: isActive && 'red' }}
    onClick={() => onChange({ day })}
  >{day}</div>
);

const Month = ({ month, isActive, onChange }) => (
  <div
    className="date-picker__month"
    style={{ backgroundColor: isActive && 'red' }}
    onClick={() => onChange({ month, day: null })}
  >{month}</div>
);

const Year = ({ year, isActive, onChange }) => (
  <div
    className="date-picker__year"
    style={{ backgroundColor: isActive && 'red' }}
    onClick={() => onChange({ year, month: null, day: null })}
  >{year}</div>
);

const DatePickerInput = ({
  onChange,
  parameters,
  value,
}) => {
  const { min, max } = parameters;
  // treat empty string as no value
  const initialDate = isRFEmpty(value) ? null : value;

  return (
    <DatePicker
      onChange={onChange}
      date={initialDate}
      min={min}
      max={max}
    >
      <Panels>
        <Years>
          {({ years, year, set, ...props }) => (
            <Panel
              isActive={!set.includes('year')}
              isComplete={set.includes('year')}
            >
              <div className="date-picker__years">
                {years.map(y => (
                  <Year
                    year={y}
                    isActive={y === year}
                    {...props}
                  />
                ))}
              </div>
            </Panel>
          )}
        </Years>
        <Months>
          {({ months, month, set, date, onReset, ...props }) => (
            <Panel
              isActive={set.includes('year') && !set.includes('month')}
              isComplete={set.includes('month')}
              label={date.year}
              onBack={() => onReset(['year', 'month', 'day'])}
            >
              <div className="date-picker__months">
                {months.map(m => (
                  <Month
                    month={m}
                    isActive={m === month}
                    {...props}
                  />
                ))}
              </div>
            </Panel>
          )}
        </Months>
        <Days>
          {({ days, day, set, date, onReset, ...props }) => (
            <Panel
              isActive={set.includes('year') && set.includes('month')}
              label={`${date.year} ${date.month}`}
              onBack={() => onReset(['month', 'day'])}
            >
              <div className="date-picker__days">
                {days.map(d => (
                  <Day
                    day={d}
                    isActive={d === day}
                    {...props}
                  />
                ))}
              </div>
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
