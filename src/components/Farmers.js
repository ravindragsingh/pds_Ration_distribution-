import React, {Component} from 'react';
//import logo from './logo.svg';
import './comp.css';
import {Route} from 'react-router-dom';
import AppBar from './AppBar';
import axios from 'axios'

class Farmers extends Component {
   state ={
   type:'',
   quantity:'',
   ownerName:'',
 //  persons:'',
   ownerType:''
   }

componentDidMount(){
axios.get(`http://pds-blockchain.mybluemix.net/get-all-produce?userName=farmer@poc&ownerId=1001`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })

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
