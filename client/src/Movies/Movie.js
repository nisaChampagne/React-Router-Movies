import React, { useState, useEffect } from 'react';
import SavedList from './SavedList';
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
    <div className="save-button">Save</div>
    <MovieCard movie={movie} />
    </div>
  );
}


