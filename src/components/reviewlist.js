import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from '../components/reviewcard';
import '../css/review.css';

class ReviewList extends Component {

  render() {
    return (
      <div className="review-list" >
        <ul>
        {this.props.reviews.map((review) =>
            <li>
                <ReviewCard
                  name={review.client.name}
                  content={review.content}
                  rating={review.rating}
                  date={review.dateCreated}
                  photo={review.client.photo} />
            </li>
          )}
          </ul>
      </div>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
}

export default ReviewList;
