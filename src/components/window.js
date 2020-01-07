import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'recompose';
import windowRootConsumer from './windowRootConsumer';

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

/*
 * HOC which will cause a component to be rendered outside of the main ReactDOM hierachy,
 * useful for modals and other windowed components.
 */
const window = WrappedComponent =>
  class Window extends Component {
    constructor(props) {
      super(props);

      this.portal = document.createElement('div');
    }

    componentDidMount() {
      this.root.appendChild(this.portal);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.windowRoot && prevProps.windowRoot !== this.root) {
        prevProps.windowRoot.removeChild(this.portal);
        this.root.appendChild(this.portal);
      }
    }

    componentWillUnmount() {
      this.root.removeChild(this.portal);
    }

    get root() {
      // If a root reference element is provided by windowRootConsumer() use that,
      // otherwise default to document.body
      return this.props.windowRoot || document.body;
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
  };

export { window };

export default compose(
  windowRootConsumer,
  window,
);
