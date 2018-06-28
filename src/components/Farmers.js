import React, {Component} from 'react';
//import logo from './logo.svg';
import './comp.css';
import {Route} from 'react-router-dom';
import AppBar from './AppBar'

class Farmers extends Component {
   state ={
   type:'',
   quantity:'',
   ownerName:'',
   ownerType:''
   }



    render() {
        return (
            <div>

                <AppBar text = "You are logged in as Farmer"/>


                <p>Select whom you want to transfer the goods</p>
                <select>
                    <option value="none" >Select category</option>
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
