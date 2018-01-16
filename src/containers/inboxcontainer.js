import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InboxMessageList from '../components/inboxmessagelist';
import '../css/inbox.css';

class InboxContainer extends Component {

  render() {
    return (
      <div className="inbox-container" >
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2">
            <h1>Inbox</h1>
            <InboxMessageList messages={this.props.userMessages} />
          </div>
        </div>
      </div>
    );
  }
}

InboxContainer.propTypes = {
  userMessages: PropTypes.array.isRequired //array of the latest message of each message array
}

export default InboxContainer;
