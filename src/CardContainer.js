import React from 'react';
import './CardContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ cards , searchValue }) => {
  return <div></div>
}

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired
}

export default CardContainer;