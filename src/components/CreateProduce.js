import React, {Component} from 'react';
import './comp.css';
import AppBar from './AppBar';
import Login from '../Login'
//import getAllProduce from '../api/getAllProduce';
import axios from 'axios';
import createProduce from '../api/postCreateProduce';
import logo from '../logo.svg';
import Home from "../App.js";

class CreateProduce extends Component {

    state = {
        login:false,
                createProduce: false,
        cUserName: "",      //available in Login
        cProduceId: "",
        cProduceType: "",
        cProduceQuantity: "",
        cOwnerType: "",     // in login
        cOwnerId: ""        // in login

    }

    constructor(props) {
        super(props);
    }


    onFormSubmit = (e) => {
        e.preventDefault();
        let that = this;

        let {cProduceType, cProduceQuantity, cProduceId} = this.state;

        if (cProduceType.valueOf() !== "" && cProduceQuantity.valueOf() !== "" && cProduceId.valueOf() !== "") {
            createProduce(this.props.userName, cProduceId, cProduceType, cProduceQuantity, this.props.ownerType, this.props.ownerId).then((res) => {
                that.setState({
                    createProduce: true,
                });
            })
        }
    };

     handleLogout = () => {

            this.setState({
                login: true
            });

        };
        handleTypeChange = (e) => {
        e.preventDefault();
        this.setState({
            cProduceType: e.target.value
        })
    };
    handleIdChange = (e) => {
        e.preventDefault();
        this.setState({
            cProduceId: e.target.value
        })
    };

    handleQuantityChange = (e) => {
        e.preventDefault();
        this.setState({
            cProduceQuantity: e.target.value
        })
    };

    render() {

        let {cProduceType, cProduceQuantity, cProduceId, createProduce } = this.state;

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
                {createProduce ? (<div className="actionItems"><p>Success Create Produce!</p>
                <button className="actionItems" onClick={this.handleLogout}>Logout
                                        </button>
                </div>) :
                    (<div>
                            <div className="inputForm">
                                <div className="subHeading">
                                    <AppBar text="Create Produce"/>
                                </div>
                                <div className="formSection">
                                    <form onSubmit={this.onFormSubmit}>
                                        <input className="inputBoxes"
                                               type="type"
                                               value={cProduceType}
                                               placeholder="Enter the produce Type"
                                               onChange={this.handleTypeChange}
                                        />
                                        <input className="inputBoxes"
                                               type="quantity"
                                               value={cProduceQuantity}
                                               onChange={this.handleQuantityChange}
                                               placeholder="Enter the Produce Quantity"
                                        />
                                        <input className="inputBoxes"
                                               type="Id"
                                               value={cProduceId}
                                               onChange={this.handleIdChange}
                                               placeholder="Enter the Produce Id"
                                        />
                                        <div>
                                            <button className="addButton">Click to add</button>
                                        </div>
                                    </form>                                </div>
                            </div>                        </div>
                    )
                }
            </div>
        )
    }
}

export default CreateProduce;
