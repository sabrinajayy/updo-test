import React, { Component } from 'react';
import Navbar from './components/navbar';
import Avatar from './components/avatar';
import Button from './components/button';
import Logo from './components/logo';
import Icon from './components/icon';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <h1>This is the Updo test</h1>

        <h2>Avatars</h2>
        <Avatar size="small" url="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png" />
        <Avatar size="medium" url="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png" />
        <Avatar size="large" url="http://ghost.skillshub.info/content/images/2017/01/profile-girl-square.png" />

        <h2>Logos</h2>
          <Logo size="small" />
          <Logo size="medium" />
          <Logo size="large" />

        <h2>Buttons</h2>
          <Button text="testing" color="green" />
          <Button text="full width" color="red" fullWidth />

        <h2>Icons</h2>
          <Icon type="envelope" size="small" color="black" />
          <Icon type="bell" size="medium" color="black" />
          <Icon type="pencil" size="large" color="blue" />
          <Icon type="star" size="medium" color="yellow" />

        <h3>Dropdown Menu</h3>
          <NavDropdown
            eventKey="4"
            title={<Icon type="bell" size="small" color="black" />}
            id="nav-dropdown" noCaret >
            You have no notifications
          </NavDropdown>
      </div>
    )
  }
}

export default App;
