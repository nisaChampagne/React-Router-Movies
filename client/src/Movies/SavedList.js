import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// const [savedMovie, setSavedMovie] = useState('');

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to ="/">Home</Link>
  </div>
);

export default SavedList;
