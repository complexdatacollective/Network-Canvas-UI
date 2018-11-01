import { compose, withContext, withStateHandlers } from 'recompose';

const WindowRootProvider = compose(
  withStateHandlers(
    () => ({
      windowRef: document.body,
    }),
    {
      setWindowRef: () => windowRef => ({
        windowRef,
      }),
    },
  ),
  withContext(
    {
      windowRef: PropTypes.instanceOf(Element),
    },
    props => ({ windowRef: props.windowRef }),
  ),
);

export default WindowRootProvider;
