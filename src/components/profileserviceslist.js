import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button';
import '../css/profileservices.css';

class ProfileServicesList extends Component {

  render() {
    return (
      <div className="profile-services-menu">
        <h2>Services</h2>
        <div className="profile-services-list-items">
          <ul>
            {this.props.services.map((service) =>
              <li>{service.name} - <strong>${service.price}</strong></li>
            )}
          </ul>
        </div>
        <div className="profile-services-list-button">
          <Button text={`Request Stylist`} color="pink" fullWidth />
        </div>
      </div>
    );
  }
}

ProfileServicesList.propTypes = {
  services: PropTypes.array.isRequired
}

export default ProfileServicesList;
