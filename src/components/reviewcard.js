import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar'
import Rating from '../components/rating'
import '../css/review.css';

class ReviewCard extends Component {

  render() {
    return (
      <div className="review-card" >
        <div className="review-avatar">
          <Avatar url={this.props.photo} size="medium" />
        </div>
        <div className="review-details">
          <h3>{this.props.name}</h3>
          <p className="review-date"><Rating mode="review" stars={this.props.rating} />  -  {this.props.date}</p>
          <p className="review-content">{this.props.content}</p>
        </div>
      </div>
    );
  }
}

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired
}

export default ReviewCard;
