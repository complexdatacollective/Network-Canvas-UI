import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduce, sortBy, without } from 'lodash';
import Checkboxes from './Checkboxes';

/**
  * A checkbox list that sets thes field value to a list of selected options
  */
class CheckboxList extends Component {

  onClickOption = (option) => {
    const { input: { value, onChange } } = this.props;

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

CheckboxList.propTypes = {
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default CheckboxList;
