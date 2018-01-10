import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

class Button extends Component {

  renderColor = () => {
    return `button btn-${this.props.color}`;
  }

  render() {
    return (
        <button className={this.renderColor()}>{this.props.text}</button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Button;
