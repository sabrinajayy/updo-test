import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GigSearchResultCard from '../components/gigsearchresultcard';
import '../css/searchresult.css';

class GigSearchResultList extends Component {

  render() {

    return (
      <div className="gig-search-result-list">
        <ul>
        {this.props.gigs.map((gig) =>
          <li>
            <GigSearchResultCard
              title={gig.title}
              description={gig.description}
              date={gig.date}
              time={gig.time}
              address={gig.address}
              duration={gig.duration}
              budget={gig.budget}
              photo={gig.photo}
              tags={gig.tags} />
          </li>
          )}
        </ul>
      </div>
    );
  }
}

GigSearchResultList.propTypes = {
  gigs: PropTypes.array.isRequired
}

export default GigSearchResultList;
