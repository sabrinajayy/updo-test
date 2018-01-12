import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar'
import Rating from '../components/rating'
import Button from '../components/button'
import TagList from '../containers/taglist';
import '../css/searchresult.css';

class SearchResultCard extends Component {

  render() {
    return (
      <div className="search-result-card" >
        <div className="search-result-avatar">
          <Avatar url={this.props.photo} size="medium" />
        </div>
        <div className="search-result-details">
          <h2>{this.props.name}</h2>
          <Rating mode="user" stars={this.props.rating} />
          <p className="search-result-category">{this.props.category}, {this.props.city}</p>
          <TagList tags={this.props.tags} />
        </div>
        <div className="search-result-button">
          <Button text="request" color="pink" fullWidth />
        </div>
      </div>
    );
  }
}

SearchResultCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

export default SearchResultCard;
