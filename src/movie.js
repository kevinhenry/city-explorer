import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends React.Component {
  render() {
    return (
      <>
        <h1>Movies</h1>
        {this.props.movies.map((movie, index) => (
        <li key={index}>
        {movie.title}
        {movie.description}
        {/* {movie.overview}
        {movie.average_votes}
        {movie.total_votes}
        {movie.image_url}
        {movie.popularity}
        {movie.released_on} */}
        </li>
        ))}
      </>
    );
  }
}

export default Movie;