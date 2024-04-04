// api.js
const OPEN_LIBRARY_URL = 'https://openlibrary.org/search.json?title=';

export async function fetchJamesBondBooks() {
  try {
    const response = await fetch(`${OPEN_LIBRARY_URL}James+Bond`);
    const data = await response.json();
    return data.docs;
  } catch (error) {
    throw Error('Failed to fetch James Bond books');
  }
}

export async function searchBooks(query) {
  try {
    const response = await fetch(`${OPEN_LIBRARY_URL}${query}`);
    const data = await response.json();
    console.log('Search API Response:', data); // Log the response data
    return data.docs;
  } catch (error) {
    throw Error('Failed to search books');
  }
}
