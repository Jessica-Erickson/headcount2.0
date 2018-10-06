import React from 'react';
import './Search.css';
import PropTypes from 'prop-types';

const Search = ({ searchValue , handleSearch }) => {
  return (
    <div className='Search'>
      <input type='text' value={searchValue} onChange={handleSearch} placeholder='Search' />
    </div>
  )
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search;
