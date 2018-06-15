import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
//import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blockchain Based Ration Distribution System1</h1>
        </header>
        <p className="App-intro">
        </p>

<div><Login/>
</div>
      </div>
    );
  }
}

export default App;
