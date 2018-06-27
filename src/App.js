import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import howitworks from './images/PDS1.PNG';
import { Route } from 'react-router-dom';
import Farmers from './components/Farmers';
import AppBar from './components/AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
        </p>
    <Route path = "/"
    render = {
    () => {
           return(
            <div>
            <AppBar text = 'Blockchain Based Ration Distribution System'/>
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
    <br>
    </br>
       <img src ={howitworks}/>
    </div>
      </div>

    );
  }
}

export default App;
