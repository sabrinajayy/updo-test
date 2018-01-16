import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InboxMessageCard from '../components/inboxmessagecard';
import '../css/inbox.css';

class InboxMessageList extends Component {

  render() {
    return (
      <div className="inbox-message-list" >
        <ul>
          {this.props.messages.map((message) =>
              <li>
                <InboxMessageCard
                  sender={message.name}
                  senderPhoto={message.photo}
                  previewText={message.content}
                  bookingDate={message.bookingDate}
                  bookingService={message.bookingService}
                  messageDate={message.date}
                  isUnread={message.isUnread}
                  />
              </li>
            )}
        </ul>
      </div>
    );
  }
}

InboxMessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default InboxMessageList;
