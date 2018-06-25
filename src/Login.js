import React, { Component } from 'react';

import './App.css';

class Login extends React.Component {
  render() {
    return (
      <div>
       <p><input
                  type = "text"
                  placeholder = "Enter the username"
                  />
        </p>
         <p>
         <input
                         type = "password"
                         placeholder = "Enter the password"
                     />

         </p>

          <p>
          <select>
                     <option value="none" disabled>Select category</option>
                     <option value="farmer">Farmer</option>
                     <option value="procurement">Procurement</option>
                     <option value="storage">Storage</option>
                     <option value="distributor">Distributor</option>
                     <option value="fps">Fair price shop</option>
                     <option value="consumer">Consumer</option>
           </select>


          </p>

        <div > <button class = "button">Login </button></div>


      </div>
    )
  }
}

export default Login
