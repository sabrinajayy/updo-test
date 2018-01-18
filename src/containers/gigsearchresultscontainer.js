import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GigSearchResultList from '../components/gigsearchresultlist';
import GigSearchMap from '../components/gigsearchmap';
import '../css/gigsearchmap.css';

class GigSearchResultsContainer extends Component {

  render() {
    return (
      <div className="gig-search-container" >
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <GigSearchResultList gigs={this.props.gigs} />
          </div>
          <div className="col-sm-6 hidden-xs">
            <GigSearchMap />
          </div>
        </div>
      </div>
    );
  }
}

GigSearchResultsContainer.propTypes = {
  gigs: PropTypes.array.isRequired
}

export default GigSearchResultsContainer;
