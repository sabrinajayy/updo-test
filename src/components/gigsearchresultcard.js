import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar';
import OurButton from '../components/button';
import TagList from '../containers/taglist';
import '../css/searchresult.css';

class GigSearchResultCard extends Component {

  render() {
    const gigDescription = this.props.description.substring(0,75);

    return (
      <div className="search-result-card" >
        <div className="search-result-avatar__gig hidden-xs">
          <Avatar url={this.props.photo} size="medium" />
        </div>
        <div className="search-result-details__gig">
          <h2>{this.props.title}</h2>
          <p className="search-result-details__gig-date">{this.props.date} - {this.props.time} ({this.props.duration})</p>
          <p className="search-result-details__gig-description">{gigDescription} (...)</p>
          <p className="search-result-details__gig-budget">Client Budget: ${this.props.budget}</p>
        </div>
        <div className="search-result-button">
          <OurButton text="QUOTE" color="pink" fullWidth />
        </div>
      </div>
    );
  }
}

GigSearchResultCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  address: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired
}

export default GigSearchResultCard;
