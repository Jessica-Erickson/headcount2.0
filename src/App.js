import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import onlineEnrollment from './data/online_pupil_enrollment';
import titleIStudents from './data/title_i_students';
import hsGraduation from './data/high_school_graduation_rates';
import medianIncome from './data/median_household_income';
import regEnrollment from './data/pupil_enrollment';
import remediation from './data/remediation_in_higher_education';
import childrenInPoverty from './data/school_aged_children_in_poverty';
import specialEd from './data/special_education';
import Controls from './Controls';
import Compare from './Compare';
import CardContainer from './CardContainer';
import Search from './Search';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      compare: [],
      repo: new DistrictRepository(kinderData)
    }

    this.data = {
      'Kindergartners In Full Day Program': kinderData,
      'Online Pupil Enrollment': onlineEnrollment,
      'Title I Students': titleIStudents,
      'High School Graduation Rates': hsGraduation,
      'Median Household Income': medianIncome,
      'Pupil Enrollment': regEnrollment,
      'Remediation in Higher Education': remediation,
      'School Aged Children in Poverty': childrenInPoverty,
      'Special Education': specialEd
    }
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value});
  }

  handleCardClick = (name) => {
    const { compare , repo } = this.state;
    if (compare.length === 0) {
      const newData = repo.findByName(name);

      this.setState({ compare: [newData] }); 
    } else if (compare.length === 1 && compare[0].location !== name) {
      const newData = repo.findByName(name);
      const existingData = compare[0];
      const compareData = repo.compareDistrictAverages(existingData.location, name)

      this.setState({ compare: [existingData, newData, compareData] });
    } else if (compare[0].location === name || compare[1].location === name) {
      this.handleCompareClick(name);
    }
  }

  handleCompareClick = (name) => {
    if (this.state.compare.length === 1) {
      this.setState({ compare: [] });
    } else if (this.state.compare.length === 3) {
      this.state.compare.pop();
      const newArray = this.state.compare.filter(card => {
        return card.location !== name;
      });
      this.setState({ compare: newArray });
    }
  }

  handleHeaderClick = (name) => {
    this.setState({ 
      repo: new DistrictRepository(this.data[name])
    });
  }

  render() {
    return (
      <div className='App'>
        <Controls 
          options={Object.keys(this.data)} 
          handleClick={this.handleHeaderClick} />
        <Compare 
          toCompare={this.state.compare}
          handleClick={this.handleCompareClick} />
        <Search 
          searchValue={this.state.search}
          handleSearch={this.handleSearch} />
        <CardContainer 
          cards={this.state.repo.findAllMatches(this.state.search)}
          handleClick={this.handleCardClick} />
      </div>
    );
  }
}
