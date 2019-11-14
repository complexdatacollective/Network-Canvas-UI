import React, { Component } from 'react';
import { round } from 'lodash';
import cx from 'classnames';
import { Slider, Handles, Tracks, Ticks } from 'react-compound-slider';
import Handle from './Handle';
import Track from './Track';
import Tick from './Tick';

const getSliderProps = (options, value) => {
  const domain = options ?
    [0, options.length - 1] :
    [0, 1];

  const step = options ? 1 : 0.0005;

  const values = options ?
    [options.findIndex(option => option.value === value)] :
    [value];

  return {
    domain,
    step,
    values,
  };
};

const getTickCount = (options) => {
  if (!options) { return null; }

  return options.length;
};

class SliderInput extends Component {
  getLabelForValue = (value) => {
    if (!this.props.options) { return value; }
    return this.props.options[value].label;
  }

  normalizeValue = (value) => {
    const options = this.props.options;
    if (options) { return options[value].value; }
    return round(value, 3);
  }

  handleChange = ([value]) => {
    const normalizedValue = this.normalizeValue(value);
    this.props.onChange(normalizedValue);
  }

  render() {
    const {
      options,
      value,
    } = this.props;

    const sliderProps = getSliderProps(options, value);
    const tickCount = getTickCount(options);
    const isLikert = !!options;
    const isVisualAnalogScale = !options;
    const showTooltips = !isVisualAnalogScale;

    const className = cx(
      'form-field-slider__slider',
      { 'form-field-slider__slider--likert': isLikert },
      { 'form-field-slider__slider--vas': isVisualAnalogScale },
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

