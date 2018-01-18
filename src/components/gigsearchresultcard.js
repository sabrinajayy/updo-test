import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../components/avatar';
import OurButton from '../components/button';
import TagList from '../containers/taglist';
import Icon from '../components/icon';
import GigQuoteForm from '../components/gigquoteform';
import '../css/searchresult.css';

import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';

class GigSearchResultCard extends Component {
   state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {

    const gigDescription = this.props.description.substring(0,75);

    return (
      <div>
      <div className="search-result-card" onClick={this.handleClickOpen}>
        <div className="search-result-avatar__gig hidden-xs">
          <Avatar url={this.props.photo} size="medium" />
        </div>
        <div className="search-result-details__gig">
          <h2>{this.props.title}</h2>
          <p className="search-result-details__gig-date">{this.props.date} - {this.props.time} ({this.props.duration})</p>
          <p className="search-result-details__gig-description">{gigDescription} (...)</p>
          <p className="search-result-details__gig-budget">Client Budget: ${this.props.budget}</p>
        </div>
        <div className="search-result-button">
          <button className="button btn-pink btn-full-width" onClick={this.handleClickOpen}>
          Quote</button>
        </div>
      </div>

        <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
          >
          <div className="gig-modal">
            <div onClick={this.handleClose} style={{cursor: "pointer"}} >
              <Icon type="x" color="pink" size="medium" />
            </div>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <h2>{this.props.title}</h2>
                  <h4>{this.props.date} {this.props.time} - {this.props.duration}</h4>
                  <p>{this.props.address.postalCode}, {this.props.address.city}</p>
                  <p>Budget: ${this.props.budget}</p>
                  <p>{this.props.description}</p>
                  <TagList tags={this.props.tags} />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <GigQuoteForm />
                </div>
              </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

GigSearchResultCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  address: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired
}

export default GigSearchResultCard;
