import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { getContext } from 'recompose';

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

/*
 * HOC which will cause a component to be rendered outside of the main ReactDOM,
 * useful for modals and other windowed components.
 */
const window = WrappedComponent =>
  getContext({
    windowRef: PropTypes.instanceOf(Element),
  })(
    class Window extends Component {
      constructor(props) {
        super(props);

        this.portal = document.createElement('div');
      }

      get root() {
        return this.props.windowRef || document.body;
      }

      componentDidMount() {
        this.root.appendChild(this.portal);
      }

      componentWillUnmount() {
        this.root.removeChild(this.portal);
      }

      static get displayName() {
        return `Window(${getDisplayName(WrappedComponent)})`;
      }

      render() {
        return ReactDOM.createPortal(
          <WrappedComponent {...this.props} />,
          this.portal,
        );
      }
    }
  );

export { window };

export default window;
