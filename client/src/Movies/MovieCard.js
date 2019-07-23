import React from "react";

export default function MovieCard(props) {
  if (!props.movie) {
    return <div>Gimme a minute....</div>;
  }

  const { title, director, metascore, stars } = props.movie;
  console.log(props)
  console.log(props.saveMovie)
  const onClick = () => {
    console.log(props)
    props.saveMovie();
  };

  return (
    <div className="movie-card">
      <h2>{title}</h2>
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
      <div onClick={onClick} className="save-button">Save</div>
    </div>
  );
}
