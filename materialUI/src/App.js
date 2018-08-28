import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
//import SimpleCard from './Components/SimpleCard'
import HttpContent from './Components/HttpContent'
//import ProvaCard from './Components/ProvaCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button variant="contained" color="primary">
              Hello World!
          </Button>
          <HttpContent/>
      </div>
    );
  }
}

export default App;
