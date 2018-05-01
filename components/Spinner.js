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

    return (
      <div className={classes}>
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
};

Spinner.defaultProps = {
  small: false,
  large: false,
};

export default Spinner;
