import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchMovies();
      setMovies(data);
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Now Showing</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;