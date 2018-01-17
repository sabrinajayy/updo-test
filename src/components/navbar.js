import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/signupform';
import Logo from '../components/logo';
import SearchBar from '../components/searchbar';
import OurButton from '../components/button';
import Icon from '../components/icon';
import TextField from 'material-ui/TextField';
import Dialog, {
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,
      } from 'material-ui/Dialog';

import Button from 'material-ui/Button';
import '../css/navbar.css';

class Navbar extends Component {
    state = {
      open: false
    };


    handleClickOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

      submit = (values) => {
      // Do something with the form values
      console.log(values);
    }


  render() {
    return (
      <div>
        <div className="navbar-updo">
          <div className="navbar-left hidden-xs">
            <Logo size="medium" />
          </div>
          <div className="navbar-left-mobile hidden-sm hidden-lg hidden-xl">
            <Logo size="small" />
          </div>
          <div className="navbar-centre hidden-xs">
            <SearchBar />
          </div>
          <div className="navbar-right hidden-xs">
            <p className="navbar-login">LOG IN</p>
            <button className="button btn-pink" onClick={this.handleClickOpen}>Sign up</button>
          </div>
          <div className="navbar-right-mobile hidden-xl hidden-lg hidden-sm">
            <Icon type="hamburger" size="small" color="pink" />
          </div>
        </div>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Sign Up Form {this.props.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your email and password to sign up!
            </DialogContentText>
           <SignUpForm />
          </DialogContent>
          <DialogActions>
            <button onClick={this.handleClose} className="btn-naked-grey">
              Cancel
            </button>
            <button onClick={this.handleClose} className="button btn-pink btn-full-width">
              Sign up
            </button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

Navbar.propTypes = {

}

export default Navbar;
