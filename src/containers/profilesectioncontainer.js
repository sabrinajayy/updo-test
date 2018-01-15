import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileAboutSection from '../components/profileaboutsection';
import ProfilePortfolioSection from '../components/profileportfoliosection';
import ProfileReviewSection from '../components/profilereviewsection';
import '../css/profilecontainer.css';

class ProfileSectionContainer extends Component {

  renderProfileSection = () => {
    if (this.props.section === "about") {
      console.log("the about section should be here");
      return <ProfileAboutSection stylist={this.props.stylist} />
    }
    else if (this.props.section === "portfolio") {
      return <ProfilePortfolioSection stylist={this.props.stylist} />
    }
    else if (this.props.section === "reviews") {
      return <ProfileReviewSection stylist={this.props.stylist} />
    }
  }

  render() {
    return (
      <div className="profile-section-container">
        {this.renderProfileSection()}
      </div>
    )
  }
}

ProfileSectionContainer.propTypes = {
  stylist: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired
}

export default ProfileSectionContainer;
