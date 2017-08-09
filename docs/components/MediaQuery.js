import React from 'react';
import PropTypes from 'prop-types';

const mql = {
  'medium-up': '(min-width: 768px)'
};

class MediaQuery extends React.Component {
  static propTypes = {
    defaultMatches: PropTypes.bool,
    query: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf(['medium-up'])
    ]).isRequired,
    render: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ])
  }

  static defaultProps = {
    defaultMatches: true
  }

  state = {
    matches: this.props.defaultMatches
  }

  componentWillMount() {
    if (typeof window !== 'object') {
      return;
    }

    const { query } = this.props;

    this.mediaQueryList = mql[query] ? window.matchMedia(mql[query]) : window.matchMedia(query);
    this.mediaQueryList.addListener(this.updateMatches);
    this.updateMatches();
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateMatches);
  }

  updateMatches = () =>
    this.setState({ matches: this.mediaQueryList.matches });


  render() {
    const { children, render } = this.props;
    const { matches } = this.state;

    return (
      render ? (
        matches ? render() : null
      ) : children ? (
        typeof children === 'function' ? (
          children(matches)
        ) : !Array.isArray(children) || children.length ? ( // Preact defaults to empty children array
          matches ? React.Children.only(children) : null
        ) : (
          null
        )
      ) : (
        null
      )
    );
  }
}

export default MediaQuery;
