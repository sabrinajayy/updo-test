import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/searchbar'
import '../css/banner.css';

class FrontBanner extends Component {

  render() {
    return (
      <div className="front-banner" >
        <div className="front-banner-content">
          <h1>{this.props.tagline}</h1>
          <SearchBar />
        </div>
      </div>
    );
  }
}

FrontBanner.propTypes = {
 tagline: PropTypes.string.isRequired
}

export default FrontBanner;
