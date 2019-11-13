import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid';
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

const Handle = ({
  handle: { id, value, percent },
  getHandleProps,
}) => {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: -15,
        marginTop: 25,
        zIndex: 2,
        width: 30,
        height: 30,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#2C4870',
        color: '#333',
      }}
      {...getHandleProps(id)}
    >
      <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
        {value}
      </div>
    </div>
  )
}

const Track = ({ source, target, getTrackProps }) => (
  <div
    style={{
      position: 'absolute',
      height: 10,
      zIndex: 1,
      marginTop: 35,
      backgroundColor: '#546C91',
      borderRadius: 5,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
);

const SliderInput = () => (
  <Slider
    rootStyle={sliderStyle}
    domain={[0, 100]}
    step={1}
    mode={2}
    values={[30]}
  >
    <div style={railStyle} />
    <Handles>
      {({ handles, getHandleProps }) => (
        <div className="slider-handles">
          {handles.map(handle => (
            <Handle
              key={handle.id}
              handle={handle}
              getHandleProps={getHandleProps}
            />
          ))}
        </div>
      )}
    </Handles>
    <Tracks right={false}>
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
  </Slider>
);

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
          <SliderInput />
          {invalid && touched && <div className="form-field-text__error"><Icon name="warning" />{error}</div>}
        </div>

      </div>

    );
  }
}

export default SliderField;

