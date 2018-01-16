import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookingCardLarge from '../components/bookingcardlarge';
import MessagesList from '../components/messageslist';
import '../css/bookingcard.css';

class BookingContainer extends Component {
  state = {
    clientType: "client"
  }

  render() {
    return (
      <div className="booking-container">
        <div className="row">
          <div className="col-xs-12 col-sm-5">
            <BookingCardLarge
              userType={this.state.clientType}
              date={this.props.booking.date}
              time={this.props.booking.time}
              duration={this.props.booking.duration}
              address={this.props.booking.address}
              service={this.props.booking.service}
              price={this.props.booking.price}
              status={this.props.booking.status}
              stylist={this.props.booking.stylist}
              client={this.props.booking.client}
              terms={this.props.booking.stylist.terms} />
          </div>
          <div className="col-xs-12 col-sm-7">
            <MessagesList messages={this.props.booking.messages} />
          </div>
        </div>
      </div>
    );
  }
}

BookingContainer.propTypes = {
  booking: PropTypes.object.isRequired
}

export default BookingContainer;
