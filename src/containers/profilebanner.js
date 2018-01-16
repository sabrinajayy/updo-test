import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileBannerContent from '../components/profilebannercontent';
import '../css/banner.css';

class ProfileBanner extends Component {

  render() {
    return (
      <div className="profile-banner" >
       <ProfileBannerContent
            name={this.props.stylist.firstName}
            rating={this.props.stylist.rating}
            photo={this.props.stylist.profilePhotoUrl}
            services={this.props.stylist.services} />
      </div>
    );
  }
}

ProfileBanner.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfileBanner;
