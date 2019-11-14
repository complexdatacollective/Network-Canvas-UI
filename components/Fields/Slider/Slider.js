import React, { Component } from 'react';
import { round } from 'lodash';
import cx from 'classnames';
import { Slider, Handles, Tracks, Ticks } from 'react-compound-slider';
import Handle from './Handle';
import Track from './Track';
import Tick from './Tick';

class SliderInput extends Component {
  getSliderProps = () => {
    const { options, value } = this.props;
    const domain = this.isLikert() ?
      [0, options.length - 1] :
      [0, 1];

    const step = this.isLikert() ? 1 : 0.0005;

    const values = this.isLikert() ?
      [options.findIndex(option => option.value === value)] :
      [value];

    return {
      domain,
      step,
      values,
    };
  };

  getTickCount = () => {
    switch (this.props.type) {
      case 'LIKERT':
        return this.props.options.length;
      case 'VAS':
        return 1;
      default:
        return null;
    }
  };

  getLabelForValue = (value) => {
    if (this.isLikert()) { return this.props.options[value].label; }
    if (this.isVisualAnalogScale()) {
      const index = value === 0 ? 'minLabel' : 'maxLabel';
      return this.props.options[index];
    }
    return round(value * 100);
  }

  normalizeValue = (value) => {
    if (this.isLikert()) {
      return this.props.options[value].value;
    }
    return round(value, 3);
  }

  handleChange = ([value]) => {
    const normalizedValue = this.normalizeValue(value);
    this.props.onChange(normalizedValue);
  }

  isLikert = () =>
    this.props.type === 'LIKERT';

  isVisualAnalogScale = () =>
    this.props.type === 'VAS';

  render() {
    const {
      options,
      value,
      type,
    } = this.props;

    const sliderProps = this.getSliderProps(type, options, value);
    const tickCount = this.getTickCount(type, options);
    const showTooltips = !this.isVisualAnalogScale();

    const className = cx(
      'form-field-slider__slider',
      { 'form-field-slider__slider--likert': this.isLikert() },
      { 'form-field-slider__slider--vas': this.isVisualAnalogScale() },
    );

    return (
      <Slider
        {...sliderProps}
        className={className}
        onChange={this.handleChange}
      >
        <Handles>
          {({ handles, activeHandleID, getHandleProps }) => (
            <div className="form-field-slider__handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getLabelForValue={this.getLabelForValue}
                  domain={sliderProps.domain}
                  isActive={handle.id === activeHandleID}
                  getHandleProps={getHandleProps}
                  showTooltips={showTooltips}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks>
          {({ tracks, getTrackProps }) => (
            <div className="form-field-slider__tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        { tickCount &&
          <Ticks count={tickCount}>
            {({ ticks }) => (
              <div className="form-field-slider__ticks">
                {ticks.map(tick => (
                  <Tick tick={tick} getLabelForValue={this.getLabelForValue} />
                ))}
              </div>
            )}
          </Ticks>
        }
      </Slider>
    );
  }
}

export default SliderInput;

