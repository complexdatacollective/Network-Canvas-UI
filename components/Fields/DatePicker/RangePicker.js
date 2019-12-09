import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { times } from 'lodash';

const RangePicker = ({
  type,
  range,
  value,
  onSelect,
  format,
  offset,
}) => {
  const classes = cx(
    'date-picker__range-picker',
    { [`date-picker__range-picker--${type}`]: !!type },
  );

  const padding = times(
    offset,
    () => (<div className="date-picker__range-item" />),
  );

  return (
    <div className={classes}>
      {padding}
      {range.map((x) => {
        const itemStyle = cx(
          'date-picker__range-item',
          { 'date-picker__range-item--is-active': value === x },
        );
        return (
          <div
            className={itemStyle}
            onClick={() => onSelect(x)}
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
  range: PropTypes.array.isRequired,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  format: PropTypes.func,
  offset: PropTypes.number,
};

RangePicker.defaultProps = {
  value: null,
  type: null,
  onSelect: () => {},
  format: x => x,
  offset: 0,
};

export default RangePicker;
