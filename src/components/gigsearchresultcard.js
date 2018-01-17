import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar';
import OurButton from '../components/button';
import TagList from '../containers/taglist';
import '../css/searchresult.css';

class GigSearchResultCard extends Component {

  render() {
    return (
      <div className="search-result-card" >
        <div className="search-result-avatar">
          <Avatar url={this.props.photo} size="medium" />
        </div>
        <div className="search-result-details">
          <h2>{this.props.name}</h2>
          <p className="search-result-category">{this.props.category}, {this.props.city}</p>
        </div>
        <div className="search-result-button">
          <OurButton text="request" color="pink" fullWidth />
        </div>
      </div>
    );
  }
}

GigSearchResultCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}

export default GigSearchResultCard;
