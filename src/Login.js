import React from 'react';

import './App.css';

class Login extends React.Component {

    state = {
        userName: '',
        password: '',
        category: ''
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
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <p>
                        <input
                            type="text"
                            value={userName}
                            placeholder="Enter the username"
                            onChange={this.handleUserChange}
                        />
                    </p>
                    <p>
                        <input
                            type="password"
                            value={password}
                            onChange={this.handlePassChange}
                            placeholder="Enter the password"
                        />
                    </p>
                    <p>
                        <select
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
                    </p>
                    <div>
                        <button className="button">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
