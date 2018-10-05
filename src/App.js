import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import onlineEnrollment from './data/online_pupil_enrollment';
import titleIStudents from './data/title_i_students';
import thirdGradeTests from './data/3rd_grade_tests';
import eighthGradeTests from './data/8th_grade_test_scores';
import aveEthMath from './data/average_race_ethnicity_math_scores';
import aveEthReading from './data/average_race_ethnicity_reading_scores';
import aveEthWriting from './data/average_race_ethnicity_writing_scores';
import dropoutRates from './data/dropout_rates_by_race_and_ethnicity';
import hsGraduation from './data/high_school_graduation_rates';
import medianIncome from './data/median_household_income';
import regEnrollment from './data/pupil_enrollment';
import enrollmentByEth from './data/pupil_enrollment_by_race_ethnicity';
import remediation from './data/remediation_in_higher_education';
import childrenInPoverty from './data/school_aged_children_in_poverty';
import specialEd from './data/special_education';
import frLunch from './data/students_qualifying_for_free_or_reduced_price_lunch';
import Controls from './Controls';
import Compare from './Compare';

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
      '3rd Grade Tests': thirdGradeTests,
      '8th Grade Test Scores': eighthGradeTests,
      'Average Ethnicity Math Scores': aveEthMath,
      'Average Ethnicity Reading Scores': aveEthReading,
      'Average Ethnicity Writing Scores': aveEthWriting,
      'Dropout Rates by Ethnicity': dropoutRates,
      'High School Graduation Rates': hsGraduation,
      'Median Household Income': medianIncome,
      'Pupil Enrollment': regEnrollment,
      'Pupil Enrollment by Ethnicity': enrollmentByEth,
      'Remediation in Higher Education': remediation,
      'School Aged Children in Poverty': childrenInPoverty,
      'Special Education': specialEd,
      'Students Qualifying for Free or Reduced Price Lunch': frLunch
    }
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value});
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
      </div>
    );
  }
}
