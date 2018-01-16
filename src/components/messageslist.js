import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../components/message';
import '../css/message.css';

class MessagesList extends Component {

  render() {
    return (
      <div className="messages-list">
        <ul>
          {this.props.messages.map((message) =>
            <li>
              <Message
                date={message.date}
                time={message.time}
                name={message.name}
                photo={message.photo}
                content={message.content}
                isSender={message.isSender} />
            </li>
            )}
        </ul>
      </div>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessagesList;
