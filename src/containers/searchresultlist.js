import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResultCard from '../components/searchresultcard';
import '../css/searchresult.css';

class SearchResultList extends Component {

  getSearchResultCard = () => {
    this.props.stylists.map((stylist) =>
      <li><SearchResultCard
              name={stylist.name}
              photo={stylist.profilePhotoUrl}
              category={stylist.serviceCategory}
              city={stylist.address.city}
              tags={stylist.tags}
              rating={stylist.rating} />
      </li>
    );
  }
  render() {
    return (
      <div className="search-result-list" >
        <ul>{this.getSearchResultCard()}</ul>
      </div>
    );
  }
}

SearchResultList.propTypes = {
  stylists: PropTypes.array.isRequired //array of stylist objects
}

export default SearchResultList;
