import React from 'react';

import './App.css';
import projectFlow from './images/Flow_A.gif';
import logo from './logo.svg';

class Login extends React.Component {

    state = {
        userName: '',
        password: '',
        category: '',
        type: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        let {userName, password, category} = this.state;
        if(userName.valueOf() !== "" && password.valueOf() !== "" ){

            this.props.onEvent(userName.valueOf(), password.valueOf(), category.valueOf());
        }
    };

    handleUserChange = (e) => {
        e.preventDefault();
        this.setState({
            userName: e.target.value
        })
    };

    handlePassChange = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    };

    handleCateChange = (e) => {
        e.preventDefault();
        this.setState({
            category: e.target.value
        })
    };

    render() {

        let {userName, password, category} = this.state;

        return (


            <div className ="loginFormCenter">
                <form onSubmit={this.onFormSubmit} >
                    <input className = "loginBoxes"
                            type="text"
                            value={userName}
                            placeholder="Enter the username"
                            onChange={this.handleUserChange}
                        />
                    <input className = "loginBoxes"
                            type="password"
                            value={password}
                            onChange={this.handlePassChange}
                            placeholder="Enter the password"
                        />
                    <select className = "loginBoxes"
                            value={category}
                            onChange={this.handleCateChange}
                        >
                            <option value="none" >Select category</option>
                            <option value="farmer">Farmer</option>
                            <option value="procurement">Procurement</option>
                            <option value="storage">Storage</option>
                            <option value="distributor">Distributor</option>
                            <option value="fps">Fair price shop</option>
                            <option value="consumer">Consumer</option>
                        </select>

                        <button className="loginButton" >Login</button>

                </form>
                <projectFlow/>

            </div>
        )
    }
}

export default Login;
