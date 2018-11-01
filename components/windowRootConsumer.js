import { getContext } from 'recompose';
import PropTypes from 'prop-types';

/**
 * A `windowRoot` (Element) context consumer
 *
 * Using windowRootConsumer(), will attach the `windowRoot` context (provided by
 * `windowRootProvider()`) to a component's props.
 *
 * Also consumes the setter method `this.props.setWindowRoot(Element)`.
 *
 * Usage as a HOC:
 *
 * class MyConsumingComponent extends Component {
 *   constructor() {
 *     this.el = document.createElement('div');
 *   }
 *
 *   componentDidMount() {
 *     this.windowRoot.appendChild(this.el);
 *   }
 *
 *   componentWillUnmount() {
 *     this.windowRoot.removeChild(this.el);
 *   }
 * }
 *
 * export WindowRootConsumer(MyConsumingComponent);
 *
 * Usage with windowRootProvider;
 */
const windowRootConsumer = getContext({
  windowRoot: PropTypes.instanceOf(Element),
  setWindowRoot: PropTypes.func,
});

export default windowRootConsumer;
