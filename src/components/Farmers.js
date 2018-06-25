import React, { Component } from 'react';
//import logo from './logo.svg';
import './comp.css';
import { Route } from 'react-router-dom'

class Farmers extends Component {
  render() {
    return (
    <div>
    <h2 className = "heading">You are logged in as Farmer</h2>

   <p>Select whom you want to transfer the goods</p>
                <select>
                         <option value="none" disabled>Select category</option>
                         <option value="farmer">Farmer</option>
                         <option value="procurement">Procurement</option>
                         <option value="storage">Storage</option>
                         <option value="distributor">Distributor</option>
                         <option value="fps">Fair price shop</option>
                         <option value="consumer">Consumer</option>
               </select>
          <br></br>
           <button> Transfer Goods</button>

    </div>

      )
  }
}

export default Farmers;
