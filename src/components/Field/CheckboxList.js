import React, { Component } from 'react';
import { fromPairs, map, reduce, sortBy, without, zip } from 'lodash';
import Checkboxes from './Checkboxes';

class CheckboxList extends Component {

  onClickOption = (option) => {
    const { value, onChange } = this.props.input;

    if (value.indexOf(option) === -1) {
      onChange(sortBy([...value, option]));
    } else {
      onChange(without(value, option));
    }
  }

  render() {
    const { label, options, meta, input: { name, value } } = this.props;

    const checks = reduce(
      options,
      (memo, option) => ({ ...memo, [option]: value.indexOf(option) !== -1 }),
      {},
    );

    return (
      <div>
        <div>{label}</div>
        <Checkboxes name={name} options={checks} onClickOption={this.onClickOption} />
        {meta.invalid &&
          <div>{meta.error}</div>}
      </div>
    );
  }
}

export default CheckboxList;
