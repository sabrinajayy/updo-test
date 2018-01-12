import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/tag.css';

class Tag extends Component {

  render() {
    return <p className="tag-updo">{this.props.text}</p>;
  }
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Tag;
