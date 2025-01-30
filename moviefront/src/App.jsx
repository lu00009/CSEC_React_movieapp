import './App.css';
import MovieCard from './components/movieCard';

function App(){
  return (
    <>
    <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/>
    <MovieCard movie={{title: "John's Film", release_date: "2023"}}/>
    <MovieCard movie={{title: "Robert's Film", release_date: "2024"}}/>

    </>
   );
}
export default App

