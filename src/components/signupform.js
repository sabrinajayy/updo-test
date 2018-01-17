import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import '../css/stylistrequestform.css';

class SignUpForm extends Component {

  // const { handleSubmit } = this.props;

  render() {
    return (
        <div className="stylist-request-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password"/>
          </div>

          <button type="submit">Submit</button>
        </form>
        </div>
    );
  }
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

SignUpForm = reduxForm({
      form: 'sign-up'
    })(SignUpForm);

export default SignUpForm;
