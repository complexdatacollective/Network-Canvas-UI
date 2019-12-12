import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { times } from 'lodash';

// If today's date isn't in range, what's the closest value?
const getScrollToValue = (range = [], today = 0) => {
  const findToday = find(range, ({ value }) => value === today);
  if (findToday) { return findToday; }
  const first = range[0].value;
  const last = range[range.length - 1].value;

  if (Math.abs(today - first) < Math.abs(today - last)) {
    return first;
  }

  return last;
};

const RangePicker = ({
  type,
  range,
  today,
  value,
  onSelect,
  offset,
}) => {
  const datePickerRef = React.createRef();
  const scrollRef = React.createRef();

  const datePickerKey = !!datePickerRef.current;
  const scrollRefKey = scrollRef.current && scrollRef.current.getAttribute('data-value');
  const rangeKey = range.toString();

  useEffect(() => {
    // only scroll when value is empty
    if (value !== null) { return; }
    if (!datePickerRef.current || !scrollRef.current) { return; }
    const offsetTop = scrollRef.current.offsetTop;
    const offsetHeight = scrollRef.current.offsetHeight;
    datePickerRef.current.scrollTop = offsetTop - (offsetHeight * 0.5);
  }, [rangeKey, datePickerKey, scrollRefKey, value]);

  const classes = cx(
    'date-picker__range-picker',
    { [`date-picker__range-picker--${type}`]: !!type },
  );

  const padding = times(
    offset,
    () => (<div className="date-picker__range-item" />),
  );

  const scrollToValue = getScrollToValue(range, today);

  return (
    <div className={classes} ref={datePickerRef}>
      {padding}
      {range.map((d) => {
        const itemStyle = cx(
          'date-picker__range-item',
          { 'date-picker__range-item--is-active': value === d.value },
          { 'date-picker__range-item--is-today': today === d.value },
          { 'date-picker__range-item--is-disabled': d.isOutOfRange },
        );
        const ref = scrollToValue === d.value ? scrollRef : null;

        return (
          <div
            className={itemStyle}
            onClick={() => onSelect(d.value)}
            ref={ref}
            data-value={d.value}
          >
            <div className="date-picker__highlight">{d.label}</div>
          </div>
        );
      })}
    </div>
  );
};

RangePicker.propTypes = {
  type: PropTypes.string,
  today: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  range: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  offset: PropTypes.number,
};

RangePicker.defaultProps = {
  value: null,
  today: null,
  type: null,
  onSelect: () => {},
  offset: 0,
};

export default RangePicker;
