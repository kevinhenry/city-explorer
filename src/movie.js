import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

// import MovieCard from './movie-card';

class Movie extends React.Component {
  render() {
    return (
      <>
      <CardDeck>
        <Card>
          <h1>Movies</h1>
          {this.props.movies.map((movie, index) => (
          <div key={index}>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          {/* {movie.overview}
          {movie.average_votes}
          {movie.total_votes} */}
          {/* <Card.Img>{movie.image_url}</Card.Img> */}
          {/* {movie.popularity}
          {movie.released_on} */}
          </div>
          ))}
        </Card>
      </CardDeck>
      </>
    )
  }
}

export default Movie;