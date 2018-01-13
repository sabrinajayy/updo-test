import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileAboutSection from '../components/profileaboutsection';
import '../css/profilecontainer.css';

class ProfileSectionContainer extends Component {

  render() {
    return (
      <div className="profile-section-container">
        <ProfileAboutSection stylist={this.props.stylist} />
      </div>
    )
  }
}

ProfileSectionContainer.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfileSectionContainer;
