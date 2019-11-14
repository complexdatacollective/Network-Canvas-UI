import React, { Component } from 'react';
import cx from 'classnames';

class Handle extends Component {
  state = {
    mouseOver: false,
  }

  handleMouseOver = () => {
    this.setState({ mouseOver: true });
  }

  handleMouseLeave = () => {
    this.setState({ mouseOver: false });
  }

  render() {
    const {
      domain: [min, max],
      handle: { id, value, percent },
      isActive,
      isDisabled,
      showTooltips,
      getHandleProps,
      getLabelForValue,
    } = this.props;
    const { mouseOver } = this.state;

    const showTooltip = showTooltips && (mouseOver || isActive) && !isDisabled;
    const handleProps = getHandleProps(
      id,
      {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      },
    );

    const markerClasses = cx(
      'form-field-slider__marker',
      { 'form-field-slider__marker--is-active': isActive },
      { 'form-field-slider__marker--is-disabled': isDisabled },
    );

    const tooltipClasses = cx(
      'form-field-slider__tooltip',
      { 'form-field-slider__tooltip--is-active': showTooltip },
    );

    const label = getLabelForValue(value);

    return (
      <React.Fragment>
        <div
          className={tooltipClasses}
          style={{ left: `${percent}%` }}
        >
          <div className="form-field-slider__tooltip-label">
            {label}
          </div>
        </div>
        <div
          className="form-field-slider__handle"
          style={{ left: `${percent}%` }}
          {...handleProps}
        />
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          className={markerClasses}
          style={{ left: `${percent}%` }}
        />
      </React.Fragment>
    );
  }
}

export default Handle;
