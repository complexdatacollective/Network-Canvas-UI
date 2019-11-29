import React from 'react';
import cx from 'classnames';

const RangePicker = ({
  type,
  range,
  value,
  onChange,
  render,
}) => {
  const classes = cx(
    'date-picker__range-picker',
    { [`date-picker__range-picker--${type}`]: !!type },
  );
  return (
    <div className={classes}>
      {range.map(x => (
        <div
          className={
            cx(
              'date-picker__range-item',
              { 'date-picker__range-item--is-active': value === x },
            )
          }
          onClick={() => onChange(x)}
        >{render(x)}</div>
      ))}
    </div>
  );
};

RangePicker.defaultProps = {
  render: x => x,
};

export default RangePicker;
