import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar';
import '../css/message.css';

class MessageForm extends Component {

  render() {
    return (
      <div className="message-form">
        <div className="row">
          <div className="col-xs-12 col-sm-9 col-lg-10">
              <form>
                <input type="text" className="message-input  tri-right right-top message-sender" />
                <input type="submit" className="btn-naked-grey" value="Send" />
              </form>
          </div>
          <div className="col-sm-3 col-lg-2 hidden-xs">
            <Avatar size="small" url={this.props.user.profilePhotoUrl} />
          </div>
        </div>
      </div>
    );
  }
}

MessageForm.propTypes = {
  user: PropTypes.object.isRequired
}

export default MessageForm;
