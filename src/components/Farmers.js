import React, {Component} from 'react';
//import logo from './logo.svg';
import './comp.css';
import AppBar from './AppBar';
import Login from '../Login'
import getAllProduce from '../api/getAllProduce';
import axios from 'axios';
import TransferProduce from "./TransferProduce";

class Farmers extends Component {

    state = {
        isGetAll: false,
        type: '',
        foodType: '',
        foodQuantity: '',
        ownerName: '',
        ownerType: '',
        transferCategory: '',
        produceid: ''
    };


    constructor(props) {
        super(props);
        let ownerName = props.name;
        var uniqueId = props.id;
        console.log(ownerName); //here ownerName from POST service is received
    }

    componentDidMount() {
        axios.get('http://pds-blockchain.mybluemix.net/get-all-produce?userName=' + this.props.name + '&ownerId=' + this.props.id)
            .then(res => {
                //console.log(res.data[0].quantity);
                // console.log(this.props.id)
                this.setState({
                    isGetAll: true,
                    transferProduce: false,
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

    render() {

        let {transferCategory} = this.state;

        if(this.state.transferProduce)
        {
            return (
                <div>
                    <TransferProduce produceID={this.state.produceID} ownerName={this.state.ownerName} ownerType={this.state.ownerType}/>
                </div>
            )
        }
        return (
            //console.log(ownerName);
            <div className="body">
                <h1>You are logged in as {this.props.text}</h1>
                <h3> Items present in your inventory</h3>
                <table className="table">
                    <tr className="td">
                        <th>Owner Name</th>
                        <th>Owner Type</th>
                        <th>Food Type</th>
                        <th>Quantity</th>

                    </tr>
                    <tr className="tdData">
                        <td>{this.state.ownerName}</td>
                        <td>{this.state.ownerType}</td>
                        <td>{this.state.foodType}</td>
                        <td>{this.state.foodQuantity}</td>

                    </tr>
                </table>
                <ol>
                    <button>Select to transfer goods</button>
                    <select
                        value={transferCategory}
                    >
                        <option value="none">Select category</option>
                        <option value="farmer">Farmer</option>
                        <option value="procurement">Procurement</option>
                        <option value="storage">Storage</option>
                        <option value="distributor">Distributor</option>
                        <option value="fps">Fair price shop</option>
                        <option value="consumer">Consumer</option>
                    </select>

                </ol>

                <button onClick={this.handleTransferProduce}>Transfer Produce</button>
                <button> Create Produce</button>
                <ol>
                    <button onClick={() => {
                        <div><Login/></div>
                    }}>Logout
                    </button>
                </ol>


            </div>

        )
    }
}

export default Farmers;
