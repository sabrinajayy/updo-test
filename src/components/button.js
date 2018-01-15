import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

class OurButton extends Component {

  renderButtonClasses = () => {

    if (this.props.fullWidth) {
      return `button btn-${this.props.color} btn-full-width`;
    }

    return `button btn-${this.props.color}`;
  }

  render() {
    return (
        <button className={this.renderButtonClasses()}>{this.props.text}</button>
    )
  }
}

OurButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default OurButton;
