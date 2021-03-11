import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Scroller extends Component {
  constructor(props) {
    super(props);

    this.scrollable = props.forwardedRef || React.createRef();
  }

  handleScroll = () => {
    if (!this.scrollable.current) { return; }
    const element = this.scrollable.current;
    const { scrollTop } = element;
    const maxScrollPosition = element.scrollHeight - element.clientHeight;
    const scrollAmount = scrollTop / maxScrollPosition;

    this.props.onScroll(scrollTop, scrollAmount);
  }

  render() {
    const {
      className,
      children,
      useSmoothScrolling,
    } = this.props;

    return (
      <div
        className={cx('scrollable', className)}
        onScroll={this.handleScroll}
        style={{ scrollBehavior: useSmoothScrolling ? 'smooth' : 'unset' }}
        ref={this.scrollable}
      >
        {children}
      </div>
    );
  }
}

Scroller.defaultProps = {
  className: '',
  onScroll: () => {},
  useSmoothScrolling: true,
  forwardedRef: null,
};

Scroller.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onScroll: PropTypes.func,
  useSmoothScrolling: PropTypes.bool,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default Scroller;
