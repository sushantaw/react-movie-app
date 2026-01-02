import React, { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../api/api";
import MovieCard from "../Components/MovieCard";
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState<string> ("");   
    const [movies, setMovies] = useState<any[]>([]);
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

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim() === "") {
            alert("Please enter a search query");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err) {
            console.error("Search error:", err);
            setError("Failed to search movies.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div> }
            {loading ? <div className = "loading">Loading...</div> : error ? <div className="error-message">{error}</div> : null}
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