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
        {movie.released_on}
        </li>
        ))}
      </>
    );
  }
}

export default Movie;