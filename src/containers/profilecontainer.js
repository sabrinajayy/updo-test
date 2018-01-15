import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileSectionContainer from '../containers/profilesectioncontainer';
import ProfileNavbar from '../components/profilenavbar';
import ProfileBanner from '../containers/profilebanner';
import '../css/profilecontainer.css';

class ProfileContainer extends Component {
  constructor() {
    super();

    this.state = { currentSection: "reviews" };
  }

  toggleSectionAt = (section) => {
    this.setState({ currentSection: section });
  }


  render() {
    return (
      <div className="profile-container">
        <ProfileBanner stylist={this.props.stylist} />
        <ProfileNavbar
          currentTab={this.state.currentSection} />
        <ProfileSectionContainer
          stylist={this.props.stylist}
          section={this.state.currentSection} />
      </div>
    )
  }
}

ProfileContainer.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfileContainer;
