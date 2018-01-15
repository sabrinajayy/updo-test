import React, { Component } from 'react';
import Avatar from '../components/avatar';
import Rating from '../components/rating';
import OurButton from '../components/button';
import Icon from '../components/icon';
import StylistRequestForm from '../components/stylistrequestform';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Dialog, {
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,
      } from 'material-ui/Dialog';

import Button from 'material-ui/Button';
import '../css/banner.css';

class ProfileBannerContent extends Component {

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
      <div className="profile-banner-content" >
        <div className="profile-banner-content__avatar">
          <Avatar url={this.props.photo} size="large" />
        </div>
        <div className="profile-banner-content__stylist">
          <h1>{this.props.name}</h1> <Icon type="verified" size="small" color="blue" />
          <p><Rating mode="user" stars={this.props.rating} /></p>
        </div>
        <div className="profile-banner-content__button">
        <button onClick={this.handleClickOpen} className="button btn-pink">Request Stylist</button>
        </div>


      </div>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Request {this.props.name}</DialogTitle>
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

ProfileBannerContent.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  services: PropTypes.array.isRequired
}


export default ProfileBannerContent;
