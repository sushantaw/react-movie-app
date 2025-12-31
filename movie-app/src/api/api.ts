const API_key = '255c6484ca640afb6c69a468e35b4bc9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_key}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_key}&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`);
    const data = await response.json();
    return data.results;
};
