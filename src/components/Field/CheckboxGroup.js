import React, { Component } from 'react';
import { fromPairs, map, reduce, sortBy, without, zip } from 'lodash';

class CheckboxGroup extends Component {
  onClickOption = (clickedOption) => {
    const { value, onChange } = this.props.input;

    onChange({
      ...fromPairs(map(this.props.options, option => [option, false])),
      ...(value || {}),
      ...{ [clickedOption]: !value[clickedOption] },
    });
  }

  render() {
    const { label, meta, input: { name, value } } = this.props;

    return (
      <div>
        <div>{label}</div>
        <Checkboxes
          name={name}
          options={value || fromPairs(map(this.props.options, option => [option, false]))}
          onClickOption={this.onClickOption}
        />
        {meta.invalid &&
          <div>{meta.error}</div>}
      </div>
    );
  }
}

export default CheckboxGroup;
