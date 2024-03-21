import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <>
    <h1>Book Search</h1>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    <input type='text' placeholder='Search...'></input>
    </>
  )
}

export default SearchBar
