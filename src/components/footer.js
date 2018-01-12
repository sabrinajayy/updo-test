import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon'
import '../css/footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="footer" >
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <div className="footer-section" >
              <h3>About us</h3>
              <ul className="footer-section-links">
                <li>Who we are</li>
                <li>Our story</li>
                <li>Blog</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3">
            <div className="footer-section" >
              <h3>Clients</h3>
              <ul className="footer-section-links">
                <li>Browse Stylists</li>
                <li>Discover Talent</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3">
            <div className="footer-section" >
              <h3>Become a Stylist</h3>
              <ul className="footer-section-links">
                <li>Why be a Stylist</li>
                <li>Our story</li>
                <li>Blog</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3">
            <div className="footer-section" >
              <h3>Stay Connected</h3>
              <ul className="list-inline">
                <li><Icon type="facebook" size="small" color="pink" /></li>
                <li><Icon type="instagram" size="small" color="pink" /></li>
                <li><Icon type="twitter" size="small" color="pink" /></li>
                <li><Icon type="youtube" size="small" color="pink" /></li>
                <li><Icon type="linkedin" size="small" color="pink" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
