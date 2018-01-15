import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewList from '../components/reviewlist';
import '../css/review.css';

class ProfileReviewSection extends Component {

  render() {
    return (
      <div className="profile-review-section" >
        <p className="profile-review-summary">{this.props.stylist.firstName} has {this.props.stylist.reviews.length} reviews</p>
        <ReviewList reviews={this.props.stylist.reviews} />
      </div>
    );
  }
}

ProfileReviewSection.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfileReviewSection;
