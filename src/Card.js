import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ data , handleClick }) => {
  let card;

  if (Object.keys(data).includes('compared')) {
    const names = Object.keys(data)
    card = (
      <article className='Card2'>
        <h2>{names[0] + ': ' + data[names[0]]}</h2>
        <h2>{'<---' + data.compared + '--->'}</h2>
        <h2>{names[1] + ': ' + data[names[1]]}</h2>
      </article>
    )
  } else if (data.stats) {
    card = (
      <article className='Card1' onClick={() => {handleClick(data.location)}}>
        <h3>{data.location}</h3>
        <ul>
        {
          Object.keys(data.stats).map((stat, index) => {
            return (
              <li key={index}>{stat + ': ' + data.stats[stat]}</li>
            )
          })
        }
        </ul>
      </article>
    );
  } else {
    card = null;
  }

  return card;
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleClick: PropTypes.func
}

export default Card;