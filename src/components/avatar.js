import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/avatar.css';

class Avatar extends Component {

  renderImageSize = () => {
    return `avatar-updo avatar-${this.props.size}`;
  }

  render() {
    return (
        <img src={this.props.url} className={this.renderImageSize()} alt="user photo" />
    )
  }
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default Avatar;
