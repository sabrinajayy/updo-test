import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar';
import OurButton from '../components/button';
import Rating from '../components/rating';
import Icon from '../components/icon';
import Dialog, {
        DialogActions,
        DialogContent,
        DialogContentText,
        DialogTitle,
      } from 'material-ui/Dialog';
import '../css/bookingcard.css';

class BookingCardLarge extends Component {

    state = {
      open: false
    };

    handleClickOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

  renderUserInfo = () => {
    if (this.props.userType === "client") {
      return (
        <div>
          <Avatar size="large" url={this.props.stylist.profilePhotoUrl} />
          <h1>{this.props.stylist.firstName} {this.props.stylist.lastName}</h1>
          <Rating stars={this.props.stylist.rating} mode="user" />
        </div>
      );
    } else {
      return (
        <div>
          <Avatar size="large" url={this.props.client.profilePhotoUrl} />
          <h1>{this.props.client.firstName} {this.props.client.lastName}</h1>
          <Icon size="small" type="phone" color="grey" />{this.props.client.phoneNumber}
        </div>
      );
    }
  }

  renderButtons = () => {
    if (this.props.userType === "stylist") {
      if (this.props.status === "unconfirmed") {
        return (
          <div>
            <OurButton text="accept" color="green" /> <OurButton text="decline" color="red" />
          </div>
        );
      }
    } else {
      return <OurButton text="cancel" color="naked-grey" />;
    }
  }

  render() {
    return (
      <div>
        <div className="booking-card-large" >
          <div className="booking-card__user">
            {this.renderUserInfo()}
          </div>
          <div className="booking-card__details">
            <h2>{this.props.service}</h2>
            <h3>${this.props.price}</h3>
            <p><Icon size="small" type="calendar" color="grey" />{this.props.date} at {this.props.time}</p>
            <p><Icon size="small" type="marker" color="grey" />{this.props.address}</p>
            <p className="booking-card__link" onClick={this.handleClickOpen}><Icon size="small" type="document" color="grey" />VIEW TERMS</p>
          </div>
          <div className="booking-card__actions">
            <h4>{this.props.status}</h4>
            {this.renderButtons()}
          </div>
        </div>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">Stylist Terms</DialogTitle>
          <DialogContent>
            <DialogContentText>
             {this.props.terms}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={this.handleClose} className="btn-naked-grey">
              Close
            </button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

BookingCardLarge.propTypes = {
  userType: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
  stylist: PropTypes.object.isRequired,
  service: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  terms: PropTypes.string.isRequired
}

export default BookingCardLarge;
