import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfilePortfolioList from '../components/profileportfoliolist';
import '../css/portfolio.css';

class ProfilePortfolioSection extends Component {

  render() {
    return (
      <div className="profile-portfolio">
        <ProfilePortfolioList photos={this.props.stylist["portfolioImages"]} />
      </div>
    )
  }
}

ProfilePortfolioSection.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfilePortfolioSection;
