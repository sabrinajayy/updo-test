import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userActionTypes } from '../_actions/types/user.actions';

import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import '../css/stylistrequestform.css';


class SignUpForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: { email: '', password: '' },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });

    const { user } = this.state;
    const { dispatch } = this.props;

    if (user.email && user.password) {
      dispatch(userActionTypes.register(user));
    }
  }

  render() {
    return (
        <div className="stylist-request-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              value={this.state.user.email}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              value={this.state.user.password}
              onChange={this.handleChange} />
          </div>

          <button type="submit">Submit</button>
        </form>
        </div>
    );
  }
}

SignUpForm = reduxForm({
      form: 'sign-up'
    })(SignUpForm);

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedSignUpForm = connect(mapStateToProps)(SignUpForm);
export default { connectedSignUpForm, SignUpForm };
