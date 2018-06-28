import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import howitworks from './images/PDS1.PNG';
import {Route} from 'react-router-dom';
import Farmers from './components/Farmers';
import loginCheck from './api/loginAuth';
import AppBar from './components/AppBar'

class App extends Component {



    loginValidation = (userName, password, category) => {
        console.log(loginCheck(userName,password,category));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <AppBar text ="Blockchain Based Ration Distribution System"/>
                    <h1 className="App-title"></h1>
                </header>
                <p className="App-intro">
                </p>
                <Route exact path="/"
                       render={
                           () => {
                               return (
                                   <div>
                                       <Login onEvent={this.loginValidation}/>
                                   </div>
                               )
                           }
                       }
                />
                <Route path="/farmers"
                       render={
                           () => {
                               return (
                                   <div>
                                       <Farmers/>
                                   </div>
                               )
                           }
                       }
                />

                <div>
                    <br>
                    </br>
                    <img src={howitworks}/>
                </div>
            </div>

        );
    }
}

export default App;
