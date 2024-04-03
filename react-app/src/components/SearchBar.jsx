import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <>
    <h1>Book Search</h1>
    <input type='text' placeholder='Search...'></input>
    {/*Ikonet under er hentet fra fontawesome.com. Link til ikon her: "https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid"*/}
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    </>
  )
}

export default SearchBar
