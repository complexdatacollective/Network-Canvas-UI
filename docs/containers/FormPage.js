import React, { Component } from 'react';

import { TextInput } from 'Components';

class FormPage extends Component {
  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Form</h1>
        <div className="grid__item">
          <TextInput
            className="input"
            name="fName"
            label="First Name"
          />
        </div>
      </div>
    );
  }
}

export default FormPage;
