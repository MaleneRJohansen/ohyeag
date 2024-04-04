// BookList.jsx
import React from 'react';
import Book from './Book';

function SearchResults({ books }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.key} book={book} />
      ))}
    </div>
  );
}

export default SearchResults;
