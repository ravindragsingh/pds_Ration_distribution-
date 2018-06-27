import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Login from '../Login';
class AppBar extends Component {
  render (){

          return (
              <div>
                        <h1 className="App-title">{this.props.text}</h1>
               </div>


          )
      }
  }
  export default AppBar

