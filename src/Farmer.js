import React, { Component } from 'react';

import './App.css';

class Farmer extends React.Component {
  render() {
    return (
      <div>
       
       <select>
          <option value="none" disabled>Select category</option>
          <option value="farmer">Farmer</option>
          <option value="procurement">Procurement</option>
          <option value="storage">Storage</option>
          <option value="distributor">Distributor</option>
          <option value="fps">Fair price shop</option>
          <option value="consumer">Consumer</option>
        </select>
       
       <button>Transfer goods</button>
      </div>
    )
  }
}

export default Farmer
