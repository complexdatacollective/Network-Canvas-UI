import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DatePicker, Years, Months, Days, Date } from './DatePicker/';
import Panels from './Panels';
import Panel from './Panel';
import RangePicker from './RangePicker';
import DatePreview from './DatePreview';
import { now, isEmpty, getFirstDayOfMonth, hasProperties } from './helpers';

const DatePickerInput = ({
  onChange: onChangeInput,
  parameters,
  value,
}) => {
  const [panelsOpen, setPanelsOpen] = useState(false);

  // when the value is changed (probably set via onChange), close the panels.
  useEffect(() => {
    setPanelsOpen(false);
  }, [value]);

  // treat empty string as no value (for Redux Forms)
  const initialDate = isEmpty(value) ? null : value;
  const handleClickPreview = (open = true) => {
    console.log(open);
    setPanelsOpen(open);
  }
  const handleFocusPreview = () => setPanelsOpen(true);
  const today = now().toObject();

  const datePickerClasses = cx(
    'date-picker',
    { 'date-picker--is-active': panelsOpen },
  );

  return (
    <div className={datePickerClasses}>
      <DatePicker
        onChange={onChangeInput}
        date={initialDate}
        min={parameters.min}
        max={parameters.max}
        type={parameters.type}
      >
        <DatePreview
          onFocus={handleFocusPreview}
          onClick={handleClickPreview}
          isActive={panelsOpen}
        />
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
                        today={today.year}
                        range={years}
                        value={date.year}
                        offset={years % 5}
                        onSelect={y => onChange({ year: y, month: null, day: null })}
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
                          today={today.month}
                          range={months}
                          value={date.month}
                          onSelect={m => onChange({ month: m, day: null })}
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
                          today={today.day}
                          range={days}
                          value={date.day}
                          offset={getFirstDayOfMonth(date) - 1}
                          onSelect={d => onChange({ day: d })}
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
