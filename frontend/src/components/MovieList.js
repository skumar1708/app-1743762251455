import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;