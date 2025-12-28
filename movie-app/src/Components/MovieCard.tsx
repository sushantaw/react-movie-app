// This is a card component for displaying the mainly movie posters and titles.

function MovieCard ({ movie }: { movie: any }) {

    function onFavouritClick() {
        alert("Favourit button clicked");
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src = {movie.url} alt = {movie.title} />
            </div>
            <div className = "movie-overlay" onClick = {onFavouritClick}>
                <button className="favourit-btn"> 🤍 </button>
            </div>
            <div className = "movie-info">
                <h3 className="movie-title"> {movie.title} </h3>
                <p className="movie-date"> {movie.release_date} </p>
            </div>
        </div>
    );
}
export default MovieCard;