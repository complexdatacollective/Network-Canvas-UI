import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.Component = props.component;
    this.state = {
      value: '',
    };
  }

  onChange = (event) => {
    const target = event.target;
    const value = ['checkbox', 'radio'].includes(target.type) ?
      target.checked : target.value;

    this.setState({ value });
  }

  get input() {
    return {
      ...this.state,
      onChange: this.onChange,
    };
  }

  // eslint-disable-next-line
  get field() {
    return {};
  }

  get manualProps() {
    const { component, ...manualProps } = this.props;
    return manualProps;
  }

  render() {
    const FieldComponent = this.Component;

    return (
      <FieldComponent
        {...this.manualProps}
        input={this.input}
        field={this.field}
      />
    );
  }
}

export default Field;
