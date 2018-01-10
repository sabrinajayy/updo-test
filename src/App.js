import React, { Component } from 'react';
import Button from './components/button';
import Logo from './components/logo';
import Icon from './components/icon';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is the Updo test</h1>
        <Logo size="small" />
        <Logo size="medium" />
        <Logo size="large" />
        <Button text="testing" color="green" />
        <Icon type="envelope" size="small" color="black" />
        <Icon type="bell" size="medium" color="black" />
        <Icon type="pencil" size="large" color="blue" />
      </div>
    );
  }
}

export default App;
