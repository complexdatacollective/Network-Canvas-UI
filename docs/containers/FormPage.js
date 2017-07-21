import React, { Component } from 'react';

import {
  TextInput,
  InputLabel,
  Checkbox,
  ToggleInput
} from 'Components';

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

  handleCheckboxChange = (e) => {
    console.log(e.target.value);
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
          <Checkbox
            name="likesDogs"
            onClick={this.handleCheckboxChange}
            value={this.state.formValues.likesDogs}
          />
        </div>
        <div className="grid__item">
          <ToggleInput
            name="likesCats"
            onClick={this.handleCheckboxChange}
            value={this.state.formValues.likesCats}
          />
        </div>
        <div className="grid__item">
          <TextInput
            className="input--wurm"
            name="fName"
            label="First Name"
            placeholder="Baby Wurm"
            errorText={this.state.formValues.fName ? '' : 'Required'}
            onChange={this.handleTextChange}
            value={this.state.formValues.fName}
          />
        </div>
      </div>
    );
  }
}

export default FormPage;
