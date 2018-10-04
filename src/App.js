import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }
  
  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
