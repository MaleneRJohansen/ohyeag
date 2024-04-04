import React from 'react'
import BookCard from './BookCard'

function SearchResults({ books }) {
  return (
    <div className='book-list'>
      {books.map(book => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  )
}

export default SearchResults
