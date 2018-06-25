import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import loginUI from './loginUI';
import howitworks from './images/PDS1.PNG';
import { Route } from 'react-router-dom';
import Farmers from './components/Farmers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Blockchain Based Ration Distribution System</h1>
        </header>
        <p className="App-intro">
        </p>
    <Route path = "/login"
    render = {
    () => {
           return(
            <div>
                        <Login/>
            </div>
           )
    }
    }
    />
     <Route path = "/farmers"
        render = {
        () => {
               return(
                <div>
                            <Farmers/>
                </div>
               )
        }
        }
        />

    <div >
    <li>
    </li>
       <img src ={howitworks}/>
    </div>
      </div>

    );
  }
}

export default App;
