import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../components/logo';
import SearchBar from '../components/searchbar';
import Button from '../components/button';
import Icon from '../components/icon';
import '../css/navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div className="navbar-updo">
        <div className="navbar-left hidden-xs">
          <Logo size="medium" />
        </div>
        <div className="navbar-left-mobile hidden-sm hidden-lg hidden-xl">
          <Logo size="small" />
        </div>
        <div className="navbar-centre hidden-xs">
          <SearchBar />
        </div>
        <div className="navbar-right hidden-xs">
          <p className="navbar-login">LOG IN</p>
          <Button text="Sign up" color="pink" />
        </div>
        <div className="navbar-right-mobile hidden-xl hidden-lg hidden-sm">
          <Icon type="hamburger" size="small" color="pink" />
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {

}

export default Navbar;
