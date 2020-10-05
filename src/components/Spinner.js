import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Spinner extends React.PureComponent {
  render() {
    const classes = classNames(
      'spinner',
      {
        'spinner--small': this.props.small,
        'spinner--large': this.props.large,
      },
    );

    const circleSize = () => {
      if (this.props.size) {
        return { '--circle-size': this.props.size };
      }

      return {};
    };

    return (
      <div className={classes} style={circleSize()} >
        <div className="circle">
          <div className="half-circle" />
          <div className="half-circle half-circle--rotated" />
        </div>
        <div className="circle">
          <div className="half-circle" />
          <div className="half-circle half-circle--rotated" />
        </div>
        <div className="circle">
          <div className="half-circle" />
          <div className="half-circle half-circle--rotated" />
        </div>
        <div className="circle">
          <div className="half-circle" />
          <div className="half-circle half-circle--rotated" />
        </div>
      </div>
    );
  }
}

Spinner.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  size: PropTypes.string,
};

Spinner.defaultProps = {
  small: false,
  large: false,
  size: null,
};

export default Spinner;
