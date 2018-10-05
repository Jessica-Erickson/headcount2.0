import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export default function Card({ data , handleCompareClick }) {
  let card;
  if (handleCompareClick) {
    card = (
      <article onClick={() => {handleCompareClick(data.location)}}>
        <h3>{data.location}</h3>
        {
          Object.keys(data.stats).map(stat => {
            return (
              <p>{stat + ': ' + data.stats[stat]}</p>
            )
          })
        }
      </article>
    );
  } else {
    const names = Object.keys(data)
    card = (
      <article>
        <h2>{names[0] + ': ' + data[names[0]]}</h2>
        <h2>{'<---' + data.compared + '--->'}</h2>
        <h2>{names[1] + ': ' + data[names[1]]}</h2>
      </article>
    )
  }
  return card;
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleCompareClick: PropTypes.func
}