import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileSectionContainer from '../containers/profilesectioncontainer';
import ProfileNavbar from '../components/profilenavbar';
import ProfileBanner from '../containers/profilebanner';
import '../css/profilecontainer.css';

class ProfileContainer extends Component {

  render() {
    return (
      <div className="profile-container">
        <ProfileBanner stylist={this.props.stylist} />
        <ProfileNavbar />
        <ProfileSectionContainer stylist={this.props.stylist} />
      </div>
    )
  }
}

ProfileContainer.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfileContainer;
