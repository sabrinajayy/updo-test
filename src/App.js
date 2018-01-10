import React, { Component } from 'react';
import Button from './components/button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is the Updo test</h1>
        <Button text="testing" color="green" />
      </div>
    );
  }
}

export default App;
