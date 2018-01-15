import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OurButton from '../components/button';
import TextField from 'material-ui/TextField';
import Dialog, {
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,
      } from 'material-ui/Dialog';

import Button from 'material-ui/Button';
import StylistRequestForm from '../components/stylistrequestform';
import '../css/profileservices.css';

class ProfileServicesList extends Component {

  state = {
    open: false
  };


  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <div className="profile-services-menu">
          <h2>Services</h2>
          <div className="profile-services-list-items">
            <ul>
              {this.props.services.map((service) =>
                <li>{service.name} - <strong>${service.price}</strong></li>
              )}
            </ul>
          </div>
          <div className="profile-services-list-button">
            <button
              className="button btn-pink btn-full-width"
              onClick={this.handleClickOpen} >
              Request Stylist
            </button>
          </div>
        </div>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Request Appointment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please complete the form below to request an appointment with {this.props.name}!
            </DialogContentText>
           <StylistRequestForm services={this.props.services} />
          </DialogContent>
          <DialogActions>
            <button onClick={this.handleClose} className="btn-naked-grey">
              Cancel
            </button>
            <button onClick={this.handleClose} className="button btn-pink btn-full-width">
              Request Stylist
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ProfileServicesList.propTypes = {
  services: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}

export default ProfileServicesList;
