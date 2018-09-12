import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('localhost:8090/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    const { data } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ul>
            <li>Uptime: {data.uptime}</li>
            <li>Version: {data.version}</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
