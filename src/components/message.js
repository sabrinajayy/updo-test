import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar';
import '../css/message.css';

class Message extends Component {
  renderMessage = () => {
    if (this.props.isSender) {
      return (
        <div className="message-container">
          <div className="row">
            <div className="col-xs-9 col-lg-10">
              <div className="message-text-container tri-right right-top message-sender">
                <p>{this.props.content}</p>
                <p className="message-date">{this.props.date}, {this.props.time}</p>
              </div>
            </div>
            <div className="col-xs-3 col-lg-2">
              <div className="message-avatar">
                <Avatar size="xsmall" url={this.props.photo} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
      <div className="message-container">
        <div className="row">
          <div className="col-xs-3 col-lg-2">
            <div className="message-avatar-left">
              <Avatar size="xsmall" url={this.props.photo} />
            </div>
          </div>
          <div className="col-xs-9 col-lg-10">
            <div className="message-text-container tri-right left-top">
              <p>{this.props.content}</p>
              <p className="message-date">{this.props.date}, {this.props.time} - {this.props.name}</p>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
  render() {
    return <div>{this.renderMessage()}</div>;
  }
}

Message.propTypes = {
  isSender: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Message;
