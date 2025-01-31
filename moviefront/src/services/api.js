const API_KEY = "c1c764b0add1c5e525e3e5bc3cad8573";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const apiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    console.log("Fetching popular movies from:", apiUrl); // Log the API URL
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response:", data); // Debugging
    if (!data.results) {
      throw new Error("No results found in the API response");
    }
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response:", data); // Debugging
    if (!data.results) {
      throw new Error("No results found in the API response");
    }
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};