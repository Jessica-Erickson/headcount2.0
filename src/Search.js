import React from 'react';
import './Search.css';
import PropTypes from 'prop-types';

const Search = ({ searchValue , handleSearch }) => {
  return <input type='text' value={searchValue} onChange={handleSearch} />
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search;
