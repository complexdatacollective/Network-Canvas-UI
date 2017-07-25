import React, { Component } from 'react';

import {
  TextInput,
  InputLabel,
  Checkbox,
  ToggleInput,
  RadioInput
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

  handleCheckboxChange = (e, checkVal) => {
    console.log(checkVal)
    console.log(e.target.name)
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: checkVal
      }
    })
  }

  handleRadioChange = (e) => {
    console.log(checkVal)
    console.log(e.target.name)
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.option
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
            label="Do you like dogs?"
            onCheck={this.handleCheckboxChange}
            checked={this.state.formValues.likesDogs}
          />
        </div>
        <div className="grid__item">
          <ToggleInput
            name="likesCats"
            onCheck={this.handleCheckboxChange}
            label="Do you like cats?"
            checked={this.state.formValues.likesCats}
          />
        </div>
        <div className="grid__item">
          <RadioInput
            onChange={this.handleRadioChange}
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
