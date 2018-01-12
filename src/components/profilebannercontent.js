import React, { Component } from 'react';
import Avatar from '../components/avatar';
import Rating from '../components/rating';
import Button from '../components/button';
import Icon from '../components/icon';
import PropTypes from 'prop-types';
import '../css/banner.css';

class ProfileBannerContent extends Component {

  render() {
    return (
      <div className="profile-banner-content" >
        <div className="profile-banner-content__avatar">
          <Avatar url={this.props.photo} size="large" />
        </div>
        <div className="profile-banner-content__stylist">
          <h1>{this.props.name}</h1> <Icon type="verified" size="small" color="blue" />
          <Rating mode="user" stars={this.props.rating} />
        </div>
        <div className="profile-banner-content__button">
          <Button text="Contact Stylist" color="pink" />
        </div>
      </div>
    );
  }
}

ProfileBannerContent.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


export default ProfileBannerContent;
