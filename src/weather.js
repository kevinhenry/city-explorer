import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    return (
      <>
      <CardDeck>
        <Card>
          <h1>Forecast</h1>
          {this.props.data.map((eachDay, index) => (
          <div key={index}>
          <Card.Title>{eachDay.date}</Card.Title>
          <Card.Text>{eachDay.description}</Card.Text>
          </div>
          ))}
        </Card>
      </CardDeck>
      </>
    );
  }
}

export default Weather;