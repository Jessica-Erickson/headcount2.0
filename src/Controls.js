import React from 'react';
import './Controls.css';
import Button from './Button';
import PropTypes from 'prop-types';

const Controls = ({ options , handleHeaderClick }) => {

  return (
    <nav> 
    {
      options.map(option => {
        return (
          <Button 
            text={option} 
            key={option} 
            handleHeaderClick={handleHeaderClick} />
        )
      })
    }
    </nav>
  )
}

Controls.propTypes = {
  options: PropTypes.array.isRequired,
  handleHeaderClick: PropTypes.func.isRequired
}

export default Controls;