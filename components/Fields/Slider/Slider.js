import React, { Component } from 'react';
import { round } from 'lodash';
import { Slider, Handles, Tracks, Ticks } from 'react-compound-slider';
import Rail from './Rail';
import Handle from './Handle';
import Track from './Track';
import Tick from './Tick';

const sliderStyle = {
  position: 'relative',
  width: '100%',
  height: 80,
  border: '1px solid steelblue',
};

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
    rootStyle: sliderStyle,
  };
};

const getTickValues = (options) => {
  if (!options) { return null; }

  return options.map(({ label }) => label);
};

class SliderInput extends Component {
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
    const tickValues = getTickValues(options);

    return (
      <Slider
        {...sliderProps}
        onChange={this.handleChange}
      >
        <Rail />
        <Handles>
          {({ handles, activeHandleID, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={sliderProps.domain}
                  isActive={handle.id === activeHandleID}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
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
        { tickValues &&
          <Ticks values={tickValues}>
            {({ ticks: sticks }) => (
              <div className="slider-ticks">
                {sticks.map(Tick)}
              </div>
            )}
          </Ticks>
        }
      </Slider>
    );
  }
}

export default SliderInput;

