import React from 'react';
import './Compare.css';
import Card from './Card';
import PropTypes from 'prop-types';

const Compare = ({ toCompare , handleClick }) => {
  let cards;
  if ( toCompare.length === 1 ) {
    const school = toCompare[0];
    cards = (<Card 
              data={school} 
              handleClick={handleClick} />);
  } else if ( toCompare.length === 3 ) {
    const school1 = toCompare[0];
    const school2 = toCompare[1];
    const compared = toCompare[2];

    cards = (
      [
        <Card 
          data={school1} 
          handleClick={handleClick} />,
        <Card data={compared} />,
        <Card 
          data={school2} 
          handleClick={handleClick} />
      ]
    )
  }

  return (
    <aside>
      {
        cards
      }
    </aside>
  )
}

Compare.propTypes = {
  toCompare: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Compare;
