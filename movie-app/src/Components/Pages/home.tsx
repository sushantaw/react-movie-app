import { useState } from "react";
import MovieCard from "../MovieCard"    

function Home() {
    const [searchQuery, setSearchQuery] = useState<string> ("");   

    const movies = [
        {id: 1, title: 'Inception', release_date: '16 July 2010' },
        {id: 2, title: 'The Dark Knight', release_date: '18 July 2008' },
        {id: 3, title: 'Interstellar', release_date: '7 November 2014' },
        {id: 4, title: 'The Matrix', release_date: '31 March 1999' }
    ];

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        alert(`Searching for ${searchQuery}`);
    }   

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <h1>Home Page</h1>
            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>  
    )
}

export default Home;