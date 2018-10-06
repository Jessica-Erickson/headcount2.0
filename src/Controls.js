import React from 'react';
import './Controls.css';
import Button from './Button';
import PropTypes from 'prop-types';

const Controls = ({ options , handleClick }) => {

  return (
    <nav> 
    {
      options.map(option => {
        return (
          <Button 
            text={option} 
            key={option} 
            handleClick={handleClick} />
        )
      })
    }
    </nav>
  )
}

Controls.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Controls;
