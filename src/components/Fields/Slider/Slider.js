import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { round, get, isNil } from 'lodash';
import cx from 'classnames';
import { Slider, Handles, Tracks, Ticks } from 'react-compound-slider';
import Handle from './Handle';
import Track from './Track';
import Tick from './Tick';

class SliderInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
    };
  }

  get options() {
    return this.props.options || [];
  }

  get value() {
    return this.props.value;
  }

  getSliderProps = () => {
    const domain = this.isLikert() ?
      [0, this.options.length - 1] :
      [0, 1];

    const step = this.isLikert() ? 1 : 0.0005;

    const values = this.isLikert() ?
      [this.options.findIndex(option => option.value === this.value)] :
      [this.value];

    return {
      domain,
      step,
      values,
    };
  };

  getTickCount = () => {
    const { type } = this.props;

    switch (type) {
      case 'LIKERT':
        return this.options.length - 1;
      case 'VAS':
        return 1;
      default:
        return null;
    }
  };

  getLabelForValue = (value) => {
    const { parameters } = this.props;
    if (this.isLikert()) { return get(this.options, [value, 'label']); }
    if (this.isVisualAnalogScale()) {
      const index = value === 0 ? 'minLabel' : 'maxLabel';
      return get(parameters, index);
    }
    return round(value * 100);
  }

  normalizeValue = (value) => {
    if (this.isLikert()) {
      return get(this.options, [value, 'value']);
    }
    return round(value, 3);
  }

  /**
   * The onChange property is called on initialization, so
   * we are using handleSlideEnd() to capture changes.
   */
  handleSlideEnd = (value) => {
    this.setState({ touched: true });
    const normalizedValue = this.normalizeValue(value);
    // Use input.onBlur rather than input.onChange so that we can set 'touched'
    this.props.onBlur(normalizedValue);
  }

  isLikert = () =>
    this.props.type === 'LIKERT';

  isVisualAnalogScale = () =>
    this.props.type === 'VAS';

  render() {
    const sliderProps = this.getSliderProps();
    const tickCount = this.getTickCount();
    const showTooltips = !this.isVisualAnalogScale();
    const isNotSet = isNil(this.props.value);
    const hasNoOptions = this.options.length < 2;
    const isBlank = this.props.type === null || (this.isLikert() && hasNoOptions);

    const className = cx(
      'form-field-slider__slider',
      { 'form-field-slider__slider--likert': this.isLikert() },
      { 'form-field-slider__slider--vas': this.isVisualAnalogScale() },
      { 'form-field-slider__slider--not-set': isNotSet },
    );

    if (isBlank) { return null; }

    return (
      <Slider
        {...sliderProps}
        className={className}
        onSlideEnd={this.handleSlideEnd}
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
                {ticks.map((tick, index) => (
                  <Tick
                    tick={tick}
                    key={`${this.getLabelForValue}_${index}`}
                    getLabelForValue={this.getLabelForValue}
                  />
                ))}
              </div>
            )}
          </Ticks>
        }
      </Slider>
    );
  }
}

SliderInput.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  parameters: PropTypes.shape({
    minLabel: PropTypes.string,
    maxLabel: PropTypes.string,
    label: PropTypes.string,
  }),
};

SliderInput.defaultProps = {
  options: [],
  value: null,
  parameters: {},
};

export default SliderInput;

