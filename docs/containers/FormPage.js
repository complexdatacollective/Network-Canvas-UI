import React, { Component } from 'react';

import {
  TextInput,
  InputLabel,
  Checkbox,
  ToggleInput,
  ContextInput,
  ToggleGroup,
  RadioInput,
  RadioGroup
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
    console.log(e.target)
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value
      }
    })
  }

  handleToggleGroupChange = (e, checked, option) => {

    const groupName = e.target.name;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [groupName]: {
          ...this.state.formValues[groupName],
          [option]: checked
        }
      }
    })
  }

  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Form</h1>
        <div className="grid__item">
          <RadioGroup
            label="So many toggles, pick yours"
            name="toggle_group_type"
            value={this.state.formValues.toggle_group_type}
            options={['context', 'checkbox', 'toggle']}
            onRadioClick={this.handleRadioChange}
          />
        </div>
        <div className="grid__item">
          <ToggleGroup
            name="pets_toggle"
            value={this.state.formValues.pets_toggle}
            options={['dogs', 'cats']}
            colors={['neon-carrot']}
            toggleComponent={this.state.formValues.toggle_group_type}
            onOptionClick={this.handleToggleGroupChange}
          />
        </div>
        <div className="grid__item">
          <Checkbox
            name="likesDogs"
            label="Do you like dogs?"
            onCheck={this.handleCheckboxChange}
            checked={this.state.formValues.likesDogs}
          />
        </div>
        <div className="grid__stack">
          <ToggleInput
            name="likesCats"
            onCheck={this.handleCheckboxChange}
            label="Do you like cats?"
            checked={this.state.formValues.likesCats}
          />
          <ToggleInput
            name="likesHedgehogs"
            onCheck={this.handleCheckboxChange}
            label="Do you like hedgehogs?"
            color="neon-carrot"
            checked={this.state.formValues.likesHedgehogs}
          />
        </div>
        <div className="grid__item">
          <ContextInput
            name="likesPets"
            onCheck={this.handleCheckboxChange}
            label="Pets!"
            checked={this.state.formValues.likesPets}
          />
          <ContextInput
            name="likesPizza"
            onCheck={this.handleCheckboxChange}
            label="Pizza"
            color='kiwi'
            checked={this.state.formValues.likesPizza}
          />
        </div>

        <div className="grid__item">
          <RadioGroup
            name="pets"
            value={this.state.formValues.pets}
            options={['dogs', 'cats']}
            onRadioClick={this.handleRadioChange}
          />
        </div>
        <div className="grid__item">
          <RadioGroup
            name="food"
            value={this.state.formValues.food}
            onRadioClick={this.handleRadioChange}
          >
            <RadioInput
              label="I like pizza"
              value="pizza"
            />
            <RadioInput
              label="I like hamburgers"
              value="hamburgers"
            />
          </RadioGroup>
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
          <TextInput
            name="age"
            label="Age"
            placeholder="Baby Wurm Age"
            isNumericOnly={true}
            errorText={this.state.formValues.age ? '' : 'Required'}
            onChange={this.handleTextChange}
            value={this.state.formValues.age}
          />
        </div>
      </div>
    );
  }
}

export default FormPage;
