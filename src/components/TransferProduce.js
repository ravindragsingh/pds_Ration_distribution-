import React, {Component} from 'react';
             import './comp.css';
             import AppBar from './AppBar';
             import Login from '../Login'
             import getAllProduce from '../api/getAllProduce';
             import axios from 'axios';

             class TransferProduce extends Component {

             state ={
                     transferProduce:false,
                     tUserName:"",      //available in Login
                     tProduceId:"",     // in GET reponse
                     tNewOwnerType:"",
                     tNewOwnerId:""
                    }

               onFormSubmit = (e) => {
                     e.preventDefault();
                     let {tProduceId, tNewOwnerType, tNewOwnerId} = this.state;
                     if(tProduceId.valueOf() !== "" && tNewOwnerType.valueOf() !== "" && tNewOwnerId.valueOf() !== "" ){

                         this.props.onEvent(tProduceId.valueOf(), tNewOwnerType.valueOf(),tNewOwnerId.valueOf());
                     }
                 };

                 handleProduceChange = (e) => {
                     e.preventDefault();
                     this.setState({
                         tProduceId: e.target.value
                     })
                 };
                  handleNOwnerChange = (e) => {
                                      e.preventDefault();
                                      this.setState({
                                          tNewOwnerType: e.target.value
                                      })
                                  };

                 handleNIdChange = (e) => {
                     e.preventDefault();
                     this.setState({
                         tNewOwnerId: e.target.value
                     })
                 };

                 render() {

                     let {tProduceId, tNewOwnerType, tNewOwnerId} = this.state;

                     return (

                         <div className="body">
                            <form onSubmit={this.onFormSubmit}>
                                                <p>
                                                    <input
                                                        type="type"
                                                        value={tProduceId}
                                                        placeholder="Enter the produce Type"
                                                        onChange={this.handleProduceChange}
                                                    />

                                                    <input
                                                         type="quantity"
                                                         value={tNewOwnerType}
                                                         onChange={this.handleNOwnerChange}
                                                         placeholder="Enter the Produce Quantity"
                                                    />

                                                <input
                                                         type="Id"
                                                         value={tNewOwnerId}
                                                         onChange={this.handleNIdChange}
                                                         placeholder="Enter the Produce Id"
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
