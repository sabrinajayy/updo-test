import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from '../components/tag';
import '../css/tag.css';

class TagList extends Component {

  render() {
    return (
      <div className="tag-list" >
        <ul className="list-inline">
          {this.props.tags.map((tag) =>
            <li><Tag text={tag} /></li>
          )}
        </ul>
      </div>
    );
  }
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagList;
