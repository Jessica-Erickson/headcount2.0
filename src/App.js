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
import CardConatiner from './CardConatiner';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
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

  handleCardClick = (name) => {
    if (this.state.compare.length < 2) {
      this.setState({compare: [...this.state.compare, name]}); 
    }
  }

  handleCompareClick = (name) => {
    this.setState({
      compare: 
      this.state.compare.filter(card => {
        return card !== name;
      })
    });
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
          handleHeaderClick={this.handleHeaderClick} />
        <Compare 
          toCompare={this.state.compare}
          repo={this.state.repo}
          handleCompareClick={this.handleCompareClick} />
        <CardConatiner />
      </div>
    );
  }
}
