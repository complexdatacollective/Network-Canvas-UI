import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Years, Months, Days, Date } from './DatePicker/';
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
        min={parameters.min}
        max={parameters.max}
        type={parameters.type}
      >
        <DatePreview onClickDate={handleClickDate} />
        <Date>
          {({ date, type, onChange }) => {
            const canSetMonth = ['full', 'month'].includes(type);
            const canSetDay = ['full'].includes(type);
            const isYearActive = hasProperties([], ['year'])(date);
            const isYearComplete = hasProperties(['year'])(date);
            const isMonthActive = hasProperties(['year'], ['month'])(date);
            const isMonthComplete = hasProperties(['month'])(date);
            const isDayActive = hasProperties(['year', 'month'], ['day'])(date);
            const isDayComplete = hasProperties(['day'])(date);

            return (
              <Panels isOpen={panelsOpen}>
                <Panel
                  isActive={isYearActive}
                  isComplete={isYearComplete}
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
                { canSetMonth &&
                  <Panel
                    isActive={isMonthActive}
                    isComplete={isMonthComplete}
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
                }
                { canSetDay &&
                  <Panel
                    isActive={isDayActive}
                    isComplete={isDayComplete}
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
                }
              </Panels>
            );
          }}
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
