import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import RoundCheckbox from './RoundCheckbox';
import MarkdownLabel from '../Fields/MarkdownLabel';

const BooleanOption = ({
  classes,
  selected,
  label,
  onClick,
}) => {
  const classNames = cx(
    'boolean-option',
    { 'boolean-option--selected': selected },
    classes,
  );

  const renderLabel = () => {
    if (typeof label === 'function') {
      return label();
    }

    return <MarkdownLabel label={label} className="form-field-inline-label" />;
  };

  return (
    <div className={classNames} onClick={onClick}>
      <RoundCheckbox checked={selected} />
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
};

BooleanOption.defaultProps = {
  classes: null,
  selected: false,
  onClick: () => {},
};

export default BooleanOption;
