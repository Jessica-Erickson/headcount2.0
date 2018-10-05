import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export default function Card({ data , handleCompareClick }) {
  return (
    <div></div>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  handleCompareClick: PropTypes.func
}