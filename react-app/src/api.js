const URL = 'https://openlibrary.org/search.json?title='

export async function fetchJamesBondBooks() {
  try {
    const response = await fetch(`${URL}James+Bond`)
    const data = await response.json()
    return data.docs
  } catch (error) {
    throw Error('Failed to fetch James Bond books')
  }
}

export async function searchBooks(query) {
  try {
    const response = await fetch(`${URL}${query}`)
    const data = await response.json()
    console.log('Search API Response:', data)
    return data.docs
  } catch (error) {
    throw Error('Failed to search books')
  }
}
