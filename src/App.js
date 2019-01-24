import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Health from './components/health/health'

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Slab</h1>
        </header>
        <p className="App-intro">
          <Health />
        </p>
      </div>
    );
  }
}

export default App;