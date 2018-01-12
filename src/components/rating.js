import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon';
import '../css/rating.css';

class Rating extends Component {

  renderRatingNumber = () => {
    if (this.props.mode === "user") {
      return "35";
    } else if (this.props.mode === "review") {
      return this.props.stars;
    } else {
      console.log("please enter user or review for mode");
    }
  }
  render() {
    return (
      <div className="rating-updo">
        <ul className="list-inline rating-stars">
          <li><Icon type="star" size="extra-small" color="yellow" /></li>
          <li><Icon type="star" size="extra-small" color="yellow" /></li>
          <li><Icon type="star" size="extra-small" color="yellow" /></li>
          <li><Icon type="star" size="extra-small" color="yellow" /></li>
          <li><Icon type="star" size="extra-small" color="yellow" /></li>
        </ul>
        <p className="rating-number">({this.renderRatingNumber()})</p>
      </div>
    );
  }
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired
}

export default Rating;
