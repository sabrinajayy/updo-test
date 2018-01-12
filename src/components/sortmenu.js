import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import '../css/searchresult.css';

class SortMenu extends Component {

  render() {
    return (
      <div className="search-result-sort-menu" >
        <DropdownButton
          bsSize="small"
          title="SORT"
          bsClass="sort-menu-button dropdown"
        >
          <MenuItem eventKey="1">Price</MenuItem>
          <MenuItem eventKey="2">Rating</MenuItem>
          <MenuItem eventKey="3">Distance</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

SortMenu.propTypes = {

}

export default SortMenu;
