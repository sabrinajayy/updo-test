import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagList from '../containers/taglist';
import ProfileServicesList from '../components/profileserviceslist';
import '../css/profileabout.css';

class ProfileAboutSection extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <div className="profile-about__content">
            <div className="profile-about__bio">
              <h2>About</h2>
              <p>{this.props.stylist.bio}</p>
            </div>
            <div className="profile-about__tags">
              <h2>Specialties</h2>
              <TagList tags={this.props.stylist["tags"]} />
            </div>
            <div className="profile-about__licences">
              <h2>Licences</h2>
              <ul className="profile-about__licences-list">
                {this.props.stylist["certifications"].map((licence) =>
                  <li>{licence.title} - {licence.grantor}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-5">
          <div className="profile-about__services">
            <ProfileServicesList services={this.props.stylist.services} />
          </div>
        </div>
      </div>
    )
  }
}

ProfileAboutSection.propTypes = {
  stylist: PropTypes.object.isRequired
}

export default ProfileAboutSection;
