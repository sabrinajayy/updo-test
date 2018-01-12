import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/tag.css';

class TagSelect extends Component {
  constructor(props) {
    super(props);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.state = {
      isSelected: false,
    };
  }

  toggleSelect = () => {
    this.setState({ isSelected: !this.state.isSelected });
  }

  renderTagClasses = () => {
    if (this.state.isSelected) {
      return "tag-updo-selected"
    }
    return "tag-updo";
  }

  render() {
    return (
        <p className={this.renderTagClasses()}
          onClick={this.toggleSelect}>
          {this.props.text}</p>
    )
  }
}

TagSelect.propTypes = {
  text: PropTypes.string.isRequired,
  toggleSelect: PropTypes.func.isRequired
}

export default TagSelect;
