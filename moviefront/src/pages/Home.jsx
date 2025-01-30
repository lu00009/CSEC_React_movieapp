import MovieCard from "../components/movieCard";
import {useState,useEffect} from "react"
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
import '../css/Home.css'
function Home() {
  const [searchQuery,setSearchQuery]= useState("");
  const [movies, setMovies] = useState({});

  useEffect(() => {}, {} )
  const handlesSearch = (e) => {
    e.preventDefault()
    alert (searchQuery)
  }
  return (
    <div className="home">
      <form onSubmit={handlesSearch} className="search-form">
        <input type="text" placeholder="search for movies..." className="search-input" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home
