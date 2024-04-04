// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='search-bar'>
      <input className='input'
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by book title"
      />
      <button className='button' onClick={handleSearchClick} disabled={searchTerm.length < 3}>Search</button>
    </div>
  );
};

export default SearchBar;
