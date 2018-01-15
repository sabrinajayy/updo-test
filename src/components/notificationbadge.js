import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon';
import Badge from 'material-ui/Badge';
import { withStyles } from 'material-ui/styles';

class NotificationBadge extends Component {

  render() {
    return (
      <Badge badgeContent={this.props.amount} color="accent">
        <Icon size="small" type={this.props.iconType} color="pink" />
      </Badge>
    );
  }
}

NotificationBadge.propTypes = {
  iconType: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  amount: PropTypes.number.isRequired
}

export default NotificationBadge;
