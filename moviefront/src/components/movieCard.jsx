import PropTypes from 'prop-types'
import '../css/MovieCard.css'
function MovieCard({movie}){
  function onFavoriteClick(){
    alert("clicked")
  }

  return(
  <div className="movie-card">
      <div className= "movie-poster">
        <img src={movie.url} alt= {movie.title} />
        <div className="movie-overlay"></div>
        <button className="favorite-btn" onClick = {onFavoriteClick}>
        ♡
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
  </div>
  )
}
MovieCard.propTypes={
  movie: PropTypes.shape({
    title : PropTypes.string,
    release_date : PropTypes.string,
    url : PropTypes.string
  })

}
export default MovieCard