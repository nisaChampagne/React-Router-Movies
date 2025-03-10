import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

export default function Movie(props) {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div>
    <MovieCard movie={movie} saveMovie={saveMovie} />
    </div>
  );
}


