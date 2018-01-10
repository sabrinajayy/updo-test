import React, { Component } from 'react';
import Button from './components/button';
import Logo from './components/logo';
import Icon from './components/icon';
import SearchBar from './components/searchbar';
import DayPicker from 'react-day-picker';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>This is the Updo test</h1>
        <h2>Logos</h2>
          <Logo size="small" />
          <Logo size="medium" />
          <Logo size="large" />
        <h2>Buttons</h2>
          <Button text="testing" color="green" />
        <h2>Icons</h2>
          <Icon type="envelope" size="small" color="black" />
          <Icon type="bell" size="medium" color="black" />
          <Icon type="pencil" size="large" color="blue" />
          <Icon type="star" size="medium" color="yellow" />

        <h3>Dropdown Menu</h3>
          <NavDropdown
            eventKey="4"
            title={<Icon type="bell" size="small" color="black" />}
            id="nav-dropdown" noCaret>
            You have no notifications
          </NavDropdown>

          <h3>Date Picker</h3>
          <DayPicker />

          <h3>Search Bars</h3>
          <SearchBar />

      </div>
    );
  }
}

export default App;
