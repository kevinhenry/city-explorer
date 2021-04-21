import React from 'react';
import Movie from './Movie.js';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {
  render() {
    let renderList = this.props.movies.map((movie, index) => (
      <Movie key={index} title={movie.title} description={movie.description} /> 
    ))
      return (
        <>
        <ListGroup>
          <h3>Movies</h3>
          {renderList}
        </ListGroup>
      </>
    );
  }
}

export default Movies;