import { withProps, compose } from 'recompose';
import TextInput from './Text';

const withNumericChangeHandler = withProps(props => ({
  type: 'number',
  input: {
    ...props.input,
    onChange: e => props.input.onChange(parseInt(e.target.value, 10)),
    onBlur: e => props.input.onBlur(parseInt(e.target.value, 10)),
  },
}));

export default compose(
  withNumericChangeHandler,
)(TextInput);
