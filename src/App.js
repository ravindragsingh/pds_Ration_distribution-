import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {Redirect} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './Login';

import Farmers from './components/Farmers';
import loginCheck from './api/loginAuth';
import AppBar from './components/AppBar';
import CreateProduce from './components/CreateProduce';
import TransferProduce from './components/TransferProduce';
import ProjectFlow from './components/ProjectFlow';


class App extends Component {

    state = {
        isAuthenticated: false,
        isGetAll:false,
        userName: '',
        userID: '',
        type: '',
        foodType:'',
        foodQuantity:''
    };
    loginValidation = (userName, password, category) => {
        let that = this;
        loginCheck(userName, password, category).then((data) => {
            that.setState({
                isAuthenticated: true,
                userName: userName,
                type: data.type,
                userID: data.userID
            });
        });
    };

    render() {

            if (this.state.isAuthenticated === true) {
            console.log("isAUthenticated check");

            //console.log(this.state.userID); this gives userID returned from POST service
             return(
                <Farmers text = {this.state.type} name = {this.state.userName} id = {this.state.userID}/>
             )

            }
        else return (
            <div className="App" >

                <header className="appHeader">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <AppBar text="Blockchain Based Ration Distribution System"/>
                    <h1 className="App-title"></h1>
                </header>
                <p className="App-intro">
                </p>
                <Switch>
                    <Route exact path="/" key='1'
                           render={
                               () => {
                                   return (
                                       <div className ="loginForm">
                                       <ProjectFlow/>
                                             <Login onEvent={this.loginValidation}/>
                                       </div>
                                   )
                               }
                           }
                    />
                    <Route path="/farmer" key='2' component={Farmers}/>
                    <Route path="/createProduce" key='3' component={CreateProduce}/>
                    <Route path="/transferProduce" key='4' component={TransferProduce}/>
                </Switch>
                <div>
                    <br>
                    </br>

                </div>
            </div>

        );
    }
}

export default App;
