import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/icon.css';

class Icon extends Component {

  render() {
    return (
        <img
          className={this.renderSize()}
          src="https://s-media-cache-ak0.pinimg.com/originals/fb/38/68/fb386802e1d0f341589ec7588927b292.png" />
    )
  }
}

Icon.propTypes = {
  size: PropTypes.string.isRequired
}

export default Icon;
