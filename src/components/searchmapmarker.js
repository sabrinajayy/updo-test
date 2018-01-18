import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchMapMarker extends Component {

  render() {
    return (
      <div className="search-map-marker">
        <img src="../images/map-marker.svg" alt="map marker" />
      </div>
    );
  }
}

SearchMapMarker.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default SearchMapMarker;
