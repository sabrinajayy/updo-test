import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/icon.css';

class Icon extends Component {
  renderIcon = () => {
    const size = this.props.size;
    const type = this.props.type;

    const iconTypes = {
      "envelope": "envelope-o",
      "bell": "bell",
      "pencil": "pencil",
      "settings": "cog",
      "user": "user",
      "star": "star",
      "empty-star": "star-o",
      "half-star": "half-star-o",
      "marker": "map-marker",
      "calendar": "calendar",
      "dollar": "usd",
      "facebook": "facebook-official",
      "instagram": "instagram",
      "twitter": "twitter",
      "youtube": "youtube",
      "pinterest": "pinterest",
      "google-plus": "google-plus-official",
      "linkedin": "linkedin-square",
      "verified": "check-circle",
      "not-verified": "check-circle-co",
      "hamburger": "bars",
      "checkmark": "check",
      "phone": "phone",
      "document": "file-text-o",
      "x": "times"
    }

    const iconSizes = {
      "extra-small": "icon-xsmall",
      "small": "fa-lg",
      "medium": "fa-2x",
      "large": "fa-4x",
      "extra-large": "fa-5x"
    }

    return `fa fa-${iconTypes[type]} ${iconSizes[size]} icon-${this.props.color}`;
  }

  render() {
    return (
        <i className={this.renderIcon()} aria-hidden="true"></i>
    )
  }
}

Icon.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Icon;
