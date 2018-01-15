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
            photo="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png"
            services={this.props.stylist.services} />
      </div>
    );
  }
}

ProfileBanner.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfileBanner;
