import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchMapMarker from '../components/searchmapmarker';
import GoogleMapReact from 'google-map-react';
import '../css/gigsearchmap.css';

class GigSearchMap extends Component {

  static defaultProps = {
    center: [43.645276, -79.395458],
    zoom: 14
  }

  render() {
    return (
      <div className="search-map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <SearchMapMarker
            lat={43.645276}
            lng={-79.395467} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GigSearchMap;
