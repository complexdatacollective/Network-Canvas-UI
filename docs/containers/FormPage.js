import React, { Component } from 'react';

import { TextInput } from 'Components';

class FormPage extends Component {
  state = {
    formValues: {}
  }

  handleTextChange = (e) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Form</h1>
        <div className="grid__item">
          <TextInput
            className="input"
            name="fName"
            label="First Name"
            placeholder="Baby Wurm"
            errorText="Required"
            onChange={this.handleTextChange}
            value={this.state.formValues.fName}
          />
        </div>
      </div>
    );
  }
}

export default FormPage;
