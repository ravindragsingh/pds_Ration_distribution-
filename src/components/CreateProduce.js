import React, {Component} from 'react';
             import './comp.css';
             import AppBar from './AppBar';
             import Login from '../Login'
             import getAllProduce from '../api/getAllProduce';
             import axios from 'axios';

             class CreateProduce extends Component {

             state ={
                     createProduce:false,
                     cUserName:"",      //available in Login
                     cProduceId:"",     // in GET reponse
                     cProduceType:"",
                     cProduceQuantity:"",
                     cOwnerType:"",     // in GET reponse
                     cOwnerId:""        // in GET reponse

             }

               onFormSubmit = (e) => {
                     e.preventDefault();
                     let {cProduceType, cProduceQuantity, cProduceId} = this.state;
                     if(cProduceType.valueOf() !== "" && cProduceQuantity.valueOf() !== "" && cProduceId.valueOf() !== "" ){

                         this.props.onEvent(cProduceType.valueOf(), cProduceQuantity.valueOf(),cProduceId.valueOf());
                     }
                 };

                 handleProduceChange = (e) => {
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

                    let {cProduceType, cProduceQuantity, cProduceId} = this.state;

                     return (

                         <div className="body">
                            <form onSubmit={this.onFormSubmit}>
                                                <p>
                                                    <input
                                                        type="type"
                                                        value={cProduceType}
                                                        placeholder="Enter the product Type"
                                                        onChange={this.handleProduceChange}
                                                    />
                                                </p>
                                                <p>
                                                    <input
                                                        type="quantity"
                                                        value={cProduceQuantity}
                                                        onChange={this.handleQuantityChange}
                                                        placeholder="Enter the Produce Quantity"
                                                    />
                                                </p>
                                                <p>
                                                <input
                                                         type="Id"
                                                                value={cProduceId}
                                                                onChange={this.handleIdChange}
                                                                placeholder="Enter the Produce Id"
                                                 />

                                                </p>
                                                <div>
                                                    <button className="button">Submit</button>
                                                </div>
                                            </form>


                         </div>

        )
    }
}

export default CreateProduce;
