import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../../api"; // removed unused imports
import MovieCard from "../MovieCard"    
import '../../css/Home.css';  // change from './css/Home.css'
// removed unused import: searchMovies, getPopularMovies

function Home() {
    const [searchQuery, setSearchQuery] = useState<string> ("");   
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
            const loadPopularMovies = async () => {
                try {
                    const popularMovies = await getPopularMovies();
                    setMovies(popularMovies);
                } catch (error) {
                    console.log("Error fetching popular movies:", error);
                    setError("Failed to load popular movies.");

                }
            }
            loadPopularMovies().finally(() => setLoading(false));
    }, []);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        alert(`Searching for ${searchQuery}`);
        searchQuery.trim() === "" ? alert("Please enter a search query") : null;
    }   

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <h1>Home Page</h1>
            <div className="movie-grid">
                {movies
                    .filter(movie => searchQuery.trim() === "" || movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>  
    )
}

export default Home;