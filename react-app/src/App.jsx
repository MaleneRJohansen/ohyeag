// App.jsx
import React, { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults';
import { searchBooks, fetchJamesBondBooks } from './api';
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      searchBooks(searchQuery)
        .then(results => setBooks(results))
        .catch(error => console.error('Error searching books:', error));
    } else {
      fetchJamesBondBooks()
        .then(results => setBooks(results))
        .catch(error => console.error('Error fetching James Bond books:', error));
    }
  }, [searchQuery]);

  const handleSearchChange = query => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearchChange} />
      <SearchResults books={books} />
    </div>
  );
}

export default App;
