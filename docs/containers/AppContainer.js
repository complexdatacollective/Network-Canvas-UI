import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store, routes } = this.props;

    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    );
  }
}

export default AppContainer;
