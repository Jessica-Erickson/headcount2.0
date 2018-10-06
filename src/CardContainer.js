import React from 'react';
import './CardContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ cards , handleClick , searchValue }) => {
  const newCards = cards.map(card => {
    return <Card data={card} key={card.location} handleClick={handleClick} />
  });
  return (
    <main className='CardContainer'>
      {
        newCards
      }
    </main>
  )
}

CardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired
}

export default CardContainer;