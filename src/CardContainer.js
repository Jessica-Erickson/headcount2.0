import React, { Component } from 'react';
import './CardContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';

export default class CardContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value});
  }

}