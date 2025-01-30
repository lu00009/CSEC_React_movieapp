const API_KEY = "684b1d03"
const BASE_URL = "https://www.omdbapi.com/"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
} 

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
  const data = await response.json()
  return data.results
} 