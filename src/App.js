import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      compare: [],
      dataSet: 'kinderData'
    }
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
