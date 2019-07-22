import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

export default function MovieList(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
         <Link to={`/movies/${movie.id}`} key={movie.id}>
         <MovieCard key={movie.id} movie={movie} />
         </Link>
      ))}
    </div>
  );
}

