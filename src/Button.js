import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text , handleClick }) => {
  return (
    <input 
      type='button'
      value={text} 
      onClick={() => {handleClick(text)}} />
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button;