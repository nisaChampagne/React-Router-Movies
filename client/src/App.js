import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from "./Movies/Movie";
import './index.css';

import SavedList from './Movies/SavedList';

export default function App(){
  const [savedList, setSavedList] = useState( [] );

  function addToSavedList(movie) {
    const movieLibrary = savedList.map(movie => movie.title)

    if (!movieLibrary.includes(movie.title)) { 
      setSavedList([...savedList, movie]);
    }
  };
 
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={(props) => <MovieList {...props} addToSavedList={addToSavedList} />} />
      <Route path='/movies/:id' render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

