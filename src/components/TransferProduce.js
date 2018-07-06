import React, {Component} from 'react';
import './comp.css';
import transferProduce from '../api/postTransferProduce';
import AppBar from './AppBar'
  import logo from '../logo.svg';

class TransferProduce extends Component {

    state = {
        transferProduce: false,   // in GET reponse
        tNewOwnerID: "",
        tNewOwnerType: ""
    };

    constructor(props) {
        super(props);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let that = this;
        let { tNewOwnerID,tNewOwnerType} = this.state;
        if (tNewOwnerID.valueOf() !== "" && tNewOwnerType.valueOf() !== "") {
            transferProduce(this.props.ownerName, this.props.produceID, tNewOwnerType, tNewOwnerID).then((res) => {
                that.setState({
                    transferProduce: true,
                });
            })
        }
    };

    handleOwnerID = (e) => {
        e.preventDefault();
        this.setState({
            tNewOwnerID: e.target.value
        })
    };
    handleOwnerType = (e) => {
            e.preventDefault();
            this.setState({
                tNewOwnerType: e.target.value
            })
        };

    render() {

        let {tNewOwnerID, tNewOwnerType} = this.state;

        if(!transferProduce){
            return (
                <div>
                    Transfer Succesfull!
                </div>);
        }

        return (

         <div>
                            <header className="appHeader">
                                                <img src={logo} className="App-logo" alt="logo"/>
                                                <AppBar text="Blockchain Based Ration Distribution System"/>
                                                <h1 className="App-title"></h1>
                                            </header>
            <div className="inputForm">
                            <AppBar text = "Transfer Produce"/>
                            <form onSubmit={this.onFormSubmit}>
                                <div className="formInputs">
                                    <input className = "inputBoxes"
                                        type="quantity"
                                        value={tNewOwnerID}
                                        onChange={this.handleOwnerID}
                                        placeholder="Enter the New Owner ID"
                                    />
                                    <input className = "inputBoxes"
                                        type="quantity"
                                        value={tNewOwnerType}
                                        onChange={this.handleOwnerType}
                                        placeholder="Enter the New Owner Type"
                                    />
                                </div>
                                    <button className="addButton">Click to Transfer</button>
                            </form>
                        </div>
                     </div>

        )
    }
}

export default TransferProduce;
