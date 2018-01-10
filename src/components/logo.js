import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/logo.css';

class Logo extends Component {

  renderSize = () => {
    return `logo logo-${this.props.size}`;
  }

  render() {
    return (
        <img
          alt="updo logo"
          className={this.renderSize()}
          src="https://s-media-cache-ak0.pinimg.com/originals/fb/38/68/fb386802e1d0f341589ec7588927b292.png" />
    )
  }
}

Logo.propTypes = {
  size: PropTypes.string.isRequired
}

export default Logo;
