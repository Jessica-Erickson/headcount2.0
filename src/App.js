import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import onlineEnrollment from './data/online_pupil_enrollment';
import titleIStudents from './data/title_i_students';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      compare: [],
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

  handleCompareClick = (name) => {
    this.setState({
      compare: 
      this.state.compare.filter(card => {
        return card.location !== name;
      })
    });
  }

  handleHeaderClick = (name) => {
    this.setState({ dataSet: name });
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
