import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { times } from 'lodash';

const RangePicker = ({
  type,
  range,
  today,
  value,
  onSelect,
  format,
  offset,
}) => {
  const datePickerRef = React.createRef();
  const scrollRef = React.createRef();

  useEffect(() => {
    if (!datePickerRef.current || !scrollRef.current) { return; }
    const offsetTop = scrollRef.current.offsetTop;
    const offsetHeight = scrollRef.current.offsetHeight;
    datePickerRef.current.scrollTop = offsetTop - offsetHeight * 0.5;
  }, [range, datePickerRef.current, scrollRef.current]);

  const classes = cx(
    'date-picker__range-picker',
    { [`date-picker__range-picker--${type}`]: !!type },
  );

  const padding = times(
    offset,
    () => (<div className="date-picker__range-item" />),
  );

  return (
    <div className={classes} ref={datePickerRef}>
      {padding}
      {range.map((x) => {
        const itemStyle = cx(
          'date-picker__range-item',
          { 'date-picker__range-item--is-active': value === x },
          { 'date-picker__range-item--is-today': today === x },
        );
        const ref = today === x ? scrollRef : null;
        return (
          <div
            className={itemStyle}
            onClick={() => onSelect(x)}
            ref={ref}
          >
            <div className="date-picker__highlight">{format(x)}</div>
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
  value: PropTypes.string,
  onSelect: PropTypes.func,
  format: PropTypes.func,
  offset: PropTypes.number,
};

RangePicker.defaultProps = {
  value: null,
  today: null,
  type: null,
  onSelect: () => {},
  format: x => x,
  offset: 0,
};

export default RangePicker;
