import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DataCard = ({
  title,
  data,
  onClick,
  allowDrag,
}) => {
  const classes = cx(
    'data-card',
    {
      'data-card--can-drag': allowDrag,
      'data-card--can-click': onClick,
    },
  );

  return (
    <div className={classes} onClick={onClick}>
      <div className="data-card__title">
        <h2>{title}</h2>
      </div>
      { data.length > 0 && (
        <div className="data-card__data">
          {data.map((item) => (
            <div className="data-card__data-item">
              <div className="data-card__data-label">{item.label}</div>
              <div className="data-card__data-value">{item.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DataCard.defaultProps = {
  data: [],
};

DataCard.propTypes = {
  data: PropTypes.array,
};

export default DataCard;
