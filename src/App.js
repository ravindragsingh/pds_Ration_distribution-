import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import loginUI from './loginUI';
import howitworks from './images/PDS1.PNG';
//import Header from './Header'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {

    return (
<BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blockchain Based Ration Distribution System1</h1>
        </header>
        <p className="App-intro">
        </p>

<div><Login/>
</div>
    <div >
    <li>
    </li>
       <img src ={howitworks}/>
    </div>
      </div>

</BrowserRouter>


    );
  }
}

export default App;
