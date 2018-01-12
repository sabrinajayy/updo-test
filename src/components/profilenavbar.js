import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/profilenavbar.css';

class ProfileNavbar extends Component {

  render() {
    return (
      <div className="profile-navbar-container">
        <div className="profile-navbar" >
            <div className="profile-navitem">
              <h2>ABOUT</h2>
            </div>
            <div className="profile-navitem">
              <h2>PORTFOLIO</h2>
            </div>
            <div className="profile-navitem">
              <h2>REVIEWS</h2>
            </div>
        </div>
      </div>
    );
  }
}

ProfileNavbar.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default ProfileNavbar;
