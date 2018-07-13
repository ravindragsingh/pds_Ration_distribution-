import React, {Component} from 'react';
//import logo from './logo.svg';
import './comp.css';
import AppBar from './AppBar';
import Login from '../Login'
import getAllProduce from '../api/getAllProduce';
import axios from 'axios';
import TransferProduce from "./TransferProduce";
import CreateProduce from "./CreateProduce";
import FarmerList from "./farmerList";
import Home from "../App.js";
import logo from '../logo.svg';

class Farmers extends Component {

    state = {
        isGetAll: false,
        type: '',
        foodType: '',
        foodQuantity: '',
        ownerName: '',
        ownerType: '',
        transferCategory: '',
        produceid: '',
        dashBoardData: []
    };


    constructor(props) {
        super(props);
        let ownerName = props.name;
        var uniqueId = props.id;
        let type = props.text;
        console.log(type); //here ownerName from POST service is received
    }

    componentDidMount() {
        axios.get('http://pds-blockchain.mybluemix.net/get-all-produce?userName=' + this.props.name + '&ownerId=' + this.props.id)
            .then(res => {
                //console.log(res.data[0].quantity);
                // console.log(this.props.id)
                console.log(res.data.length)

                this.setState({
                    isGetAll: true,
                    login: false,
                    transferProduce: false,
                    createProduce: false,
                    dashBoardData: res.data,
                    foodQuantity: res.data[0].quantity,
                    foodType: res.data[0].type,
                    ownerName: this.props.name,
                    ownerType: res.data[0].owner.type,
                    produceID: res.data[0].produceid
                });
            })
    }

    handleTransferProduce = () => {

        this.setState({
            transferProduce: true
        });

    };

    handleLogout = () => {

        this.setState({
            login: true
        });

    };

    handleCreateProduce = () => {

        this.setState({
            createProduce: true
        });

    };

    render() {

        let {transferCategory, dashBoardData} = this.state;

        if (this.state.transferProduce) {
            return (
                <TransferProduce produceID={this.state.produceID} ownerName={this.state.ownerName}
                                 ownerType={this.state.ownerType} stateTransferProduce = {this.state.transferProduce}/>
            )
        }

        if (this.state.createProduce) {
            return (
                <CreateProduce userName={this.props.name} ownerId={this.props.id} ownerType={this.props.text}/>
            )
        }
        if (this.state.login) {
            return (
                <Home/>
            )
        }
        return (

            <div>
                <header className="appHeader">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <AppBar text="Blockchain Based Ration Distribution System"/>
                    <h1 className="App-title"></h1>
                </header>

                <div className="body">
                    <div className="titleSection">
                        <p className="loginInfo">You are logged in as <span>{this.props.text}</span> <a
                            onClick={this.handleLogout}>Logout </a></p>
                        <h3> Items present in your inventory</h3>
                    </div>
                   <div className="tableSection">
                                           <table className="table">
                                               <thead>
                                                  <tr className="td">
                                                       <th>Owner Name</th>
                                                       <th>Owner Type</th>
                                                       <th>Food Type</th>
                                                       <th>Quantity</th>
                                                       <th>Produce Id</th>
                                                   </tr>
                                               </thead>
                                               {dashBoardData.map((produce, key)=>{
                                                 return <FarmerList key={key} produce={produce}/>
                                                 })}

                                           </table>
                                       </div>
                    <div className="actionSection">
                        <button className="actionItems">Select to transfer goods</button>
                        <select className="actionItems" value={transferCategory}>
                            <option value="none">Select category</option>
                            <option value="farmer">Farmer</option>
                            <option value="procurement">Procurement</option>
                            <option value="storage">Storage</option>
                            <option value="distributor">Distributor</option>
                            <option value="fps">Fair price shop</option>
                            <option value="consumer">Consumer</option>
                        </select>

                        <button className="actionItems" onClick={this.handleTransferProduce}>Transfer Produce</button>
                        <button className="actionItems" onClick={this.handleCreateProduce}> Create Produce</button>

                        <button className="actionItems" onClick={this.handleLogout}>Logout

                        </button>

                         <p>
                                                     <button className="dummyActionItems" >Upload</button>
                                                     <button className="dummyActionItems" >Verify</button>
                                                     <button className="dummyActionItems" >Detect Fraud</button>
                                                </p>
                    </div>


                </div>
            </div>


        )
    }
}

export default Farmers;