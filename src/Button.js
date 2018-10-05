import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ text , handleHeaderClick }) {
  return (
    <input 
      type='button'
      value={text} 
      onClick={() => {handleHeaderClick(text)}} />
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleHeaderClick: PropTypes.func.isRequired
}
