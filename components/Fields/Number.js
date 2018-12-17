import { withProps, compose } from 'recompose';
import TextInput from './Text';

const toInt = (value) => {
  const int = parseInt(value, 10);
  if (isNaN(int)) {
    return null;
  }
  return int;
};

const withNumericChangeHandler = withProps(props => ({
  type: 'number',
  input: {
    ...props.input,
    onChange: e => props.input.onChange(toInt(e.target.value)),
    onBlur: e => props.input.onBlur(toInt(e.target.value)),
  },
}));

export default compose(
  withNumericChangeHandler,
)(TextInput);
