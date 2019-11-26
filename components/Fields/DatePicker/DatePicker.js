import React from 'react';
import { DatePicker, Years, Months, Days } from './DatePicker/';

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

// must understand dates, must paginate for year
const PickerPanel = ({ current, children }) => {
  return (
    <div className="date-picker__panel">
      { current &&
        <div>
          <div>
            {current}
          </div>
        </div>
      }
      <div className="date-picker__panel-content">
        {children}
      </div>
    </div>
  );
};

const PickerPanels = ({ children }) => {
  return (
    <div className="date-picker__panels">
      {children}
    </div>
  );
};

const DatePickerInput = ({
  onChange,
  min,
  max,
  date,
}) => {
  return (
    <DatePicker
      onChange={onChange}
      date={date}
      min={min}
      max={max}
    >
      <PickerPanels>
        <PickerPanel>
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
        </PickerPanel>
        <PickerPanel>
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
        </PickerPanel>
        <PickerPanel>
          <Days>
            {({ days, current, daysProps }) => (
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
        </PickerPanel>
      </PickerPanels>
    </DatePicker>
  );
};

DatePickerInput.defaultProps = {
  date: null,
  min: '1980-01-01',
  max: '2019-12-01',
};

export default DatePickerInput;
