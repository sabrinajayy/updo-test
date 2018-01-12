import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileBannerContent from '../components/profilebannercontent';
import '../css/banner.css';

class ProfileBanner extends Component {

  render() {
    return (
      <div className="profile-banner" >
       <ProfileBannerContent
            name="Sarah Leibowitz" //would be this.props.stylist.fullName
            rating={5} //this.props.stylist.rating
            photo="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png" />
      </div>
    );
  }
}

ProfileBanner.propTypes = {
  stylist: PropTypes.string.isRequired //it should really be PropTypes.object.isRequired
}

export default ProfileBanner;
