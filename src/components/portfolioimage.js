import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/portfolio.css';

class PortfolioImage extends Component {

  render() {
    return (
      <img
        src={this.props.url}
        alt={this.props.title}
        className="portfolio-image" />
    )
  }
}

PortfolioImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PortfolioImage;
