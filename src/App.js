import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      compare: [],
      dataSet: 'kinderData',
      repo: new DistrictRepository(kinderData)
    }
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value});
  }

  handleCardClick = (name) => {
    if (this.state.compare.length < 2) {
      const cardData = this.state.repo.findByName(name);
      this.setState({compare: [...this.state.compare, cardData]}); 
    }
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
