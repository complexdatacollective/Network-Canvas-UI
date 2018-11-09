import React, { PureComponent } from 'react';
import TextInput from './Text';

class NumberInput extends PureComponent {
  render() {
    return (
      <TextInput type="number" {...this.props} />
    );
  }
}

export default NumberInput;
