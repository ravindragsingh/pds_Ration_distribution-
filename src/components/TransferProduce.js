import React, {Component} from 'react';
import './comp.css';
import transferProduce from '../api/postTransferProduce';

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
            <div className="body">
                <form onSubmit={this.onFormSubmit}>
                    <p>
                        <input
                            type="quantity"
                            value={tNewOwnerID}
                            onChange={this.handleOwnerID}
                            placeholder="Enter the New Owner ID"
                        />
                        <input
                                                    type="quantity"
                                                    value={tNewOwnerType}
                                                    onChange={this.handleOwnerType}
                                                    placeholder="Enter the New Owner Type"
                                                />
                    </p>

                    <div>
                        <button className="button">Click to Transfer</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TransferProduce;
