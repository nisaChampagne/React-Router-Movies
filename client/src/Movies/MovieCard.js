import React from "react";
import { Link } from 'react-router-dom';


export default function MovieCard(props) {
  if (!props.movie) {
    return <div>Gimme a minute....</div>;
  }

  const { title, director, metascore, stars } = props.movie;
  console.log(props)
  console.log(props.saveMovie)

  return (
    <div className="movie-card">
      <Link to='/movies/:id'>
      <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>


      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <div onClick={props.saveMovie} className="save-button">Save</div>
    </div>
  );
}
