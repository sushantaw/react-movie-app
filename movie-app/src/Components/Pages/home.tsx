import { useState } from "react";
import MovieCard from "../MovieCard"    
import '../../css/Home.css';  // change from './css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState<string> ("");   

    const movies = [
    {
        id: 1, 
        title: 'Inception', 
        release_date: '16 July 2010',
        poster_path: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
    },
    {
        id: 2, 
        title: 'The Dark Knight', 
        release_date: '18 July 2008',
        poster_path: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
        id: 3, 
        title: 'Interstellar', 
        release_date: '7 November 2014',
        poster_path: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
        id: 4, 
        title: 'The Matrix', 
        release_date: '31 March 1999',
        poster_path: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
    }
];

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