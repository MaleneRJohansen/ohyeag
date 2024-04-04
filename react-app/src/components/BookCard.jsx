import React from 'react'

function BookCard({ book }) {
  return (
    <div className="books">
      <h2>{book.title}</h2>
      <p>First published: {book.first_publish_year}</p>
      <p>Author: {book.author_name}</p>
      <p>Average rating: {book.ratings_average}</p>
      <a href={`https://www.amazon.com/s?k=${book.id_amazon}`} target="_blank" rel="noopener noreferrer">Amazon search</a>
    </div>
  )
}

export default BookCard
