import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useResizeAware from 'react-resize-aware';
import RoundCheckbox from './RoundCheckbox';
import Markdown from '../Fields/Markdown';

const BooleanOption = ({
  classes,
  selected,
  label,
  onClick,
  icon,
  negative,
}) => {
  const [resizeListener, sizes] = useResizeAware();

  const classNames = cx(
    'boolean-option',
    { 'boolean-option--selected': selected },
    { 'boolean-option--negative': negative },
    { 'boolean-option--collapsed': sizes && sizes.width < 235 },
    classes,
  );

  const renderLabel = () => {
    if (typeof label === 'function') {
      return label();
    }

    return <Markdown label={label} className="form-field-inline-label" />;
  };

  return (
    <div className={classNames} onClick={onClick} style={{ position: 'relative' }}>
      {resizeListener}
      <RoundCheckbox checked={selected} customIcon={icon} negative={negative} />
      {renderLabel()}
    </div>
  );
};

BooleanOption.propTypes = {
  classes: PropTypes.string,
  selected: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  negative: PropTypes.bool,
};

BooleanOption.defaultProps = {
  classes: null,
  selected: false,
  onClick: () => {},
  icon: null,
  negative: false,
};

export default BooleanOption;
