import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
import { first, last, round } from 'lodash';
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

const sliderStyle = {
  position: 'relative',
  width: '100%',
  height: 80,
  border: '1px solid steelblue',
};

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 10,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: '#8B9CB6',
};

class Handle extends Component {
  state = {
    mouseOver: false,
  }

  onMouseEnter = () => {
    this.setState({ mouseOver: true })
  }

  onMouseLeave = () => {
    this.setState({ mouseOver: false })
  }

  render() {
    const {
      domain: [min, max],
      handle: { id, value, percent },
      isActive,
      disabled,
      getHandleProps,
    } = this.props;
    const { mouseOver } = this.state;

    return (
      <React.Fragment>
        {(mouseOver || isActive) && !disabled ? (
          <div
            style={{
              left: `${percent}%`,
              position: 'absolute',
              marginLeft: '-11px',
              marginTop: '-35px',
            }}
          >
            <div className="tooltip">
              <span className="tooltiptext">Value: {value}</span>
            </div>
          </div>
        ) : null}
        <div
          style={{
            left: `${percent}%`,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            zIndex: 400,
            width: 26,
            height: 42,
            cursor: 'pointer',
            // border: '1px solid grey',
            backgroundColor: 'none',
          }}
          {...getHandleProps(id, {
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
          })}
        />
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          style={{
            left: `${percent}%`,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            zIndex: 300,
            width: 24,
            height: 24,
            border: 0,
            borderRadius: '50%',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
            backgroundColor: disabled ? '#666' : '#8b6068',
          }}
        />
      </React.Fragment>
    )
  }
}

const Track = ({ source, target, getTrackProps }) => (
  <div
    style={{
      position: 'absolute',
      height: 20,
      zIndex: 1,
      marginTop: 35,
      backgroundColor: 'red',
      borderRadius: 5,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
);

const SliderInput = ({
  options,
  value,
  onChange,
}) => {
  const domain = options ?
    [0, options.length - 1] :
    [0, 1];
  const step = options ? 1 : 0.0005;
  const values = options ?
    [options.findIndex(option => option.value === value)] :
    [value];

  const handleChange = ([value]) => {
    const normalizedValue = round(value, 3);
    const savedValue = options ?
      options[value].value :
      normalizedValue;

    onChange(savedValue);
  };

  const ticks = options ?
    options.map(({ label }) => label) :
    null;

  return (
    <Slider
      rootStyle={sliderStyle}
      domain={domain}
      step={step}
      values={values}
      onChange={handleChange}
    >
      <div style={railStyle} />
      <Handles>
        {({ handles, activeHandleID, getHandleProps }) => (
          <div className="slider-handles">
            {handles.map(handle => (
              <Handle
                // key={handle.id}
                // handle={handle}
                // getHandleProps={getHandleProps}
                key={handle.id}
                handle={handle}
                domain={domain}
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
      { ticks &&
        <Ticks values={ticks}>
          {({ ticks: sticks }) => (
            <div className="slider-ticks">
              {sticks.map(({ value, percent }) => (
                <div>{value}</div>
              ))}
            </div>
          )}
        </Ticks>
      }
    </Slider>
  );
};

class SliderField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuid(),
    };
  }

  render() {
    const {
      input,
      meta: { error, active, invalid, touched },
      label,
      placeholder,
      fieldLabel,
      className,
      type,
      autoFocus,
      hidden,
    } = this.props;

    console.log(this.props);

    const seamlessClasses = cx(
      className,
      'form-field-slider',
    );

    const anyLabel = fieldLabel || label;

    return (
      <div className="form-field-container" hidden={hidden}>
        { anyLabel &&
          <h4>{anyLabel}</h4>
        }
        <div className={seamlessClasses}>
          <SliderInput
            options={this.props.options}
            {...this.props.input}
          />
          {invalid && touched && <div className="form-field-text__error"><Icon name="warning" />{error}</div>}
        </div>

      </div>

    );
  }
}

export default SliderField;

