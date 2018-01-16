import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar'
import OurButton from '../components/button'
import '../css/inbox.css';

class InboxMessageCard extends Component {

  renderMessageClass = () => {
    if (this.props.isUnread) {
      return "inbox-message-card unread-message";
    } else {
      return "inbox-message-card";
    }
  }

  render() {
    return (
      <div className={this.renderMessageClass()} >
        <div className="inbox-message-avatar">
          <Avatar url={this.props.senderPhoto} size="small" />
        </div>
        <div className="inbox-message-details">
          <h2>{this.props.sender}</h2>
          <p className="inbox-message-preview">{this.props.previewText}</p>
          <p className="inbox-message-booking">{this.props.bookingDate} - {this.props.bookingService}</p>
        </div>
        <div className="inbox-message-date">
          <p>{this.props.messageDate}</p>
        </div>
      </div>
    );
  }
}

InboxMessageCard.propTypes = {
  sender: PropTypes.string.isRequired,
  senderPhoto: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired,
  bookingDate: PropTypes.string.isRequired,
  bookingService: PropTypes.string.isRequired,
  messageDate: PropTypes.string.isRequired,
  isUnread: PropTypes.bool.isRequired
}

export default InboxMessageCard;
