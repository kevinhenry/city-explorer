import React from 'react';
import WeatherDay from './WeatherDay.js';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    let renderList = this.props.data.map((eachDay, index) => (
      <WeatherDay key={index} date={eachDay.date} description={eachDay.description} />
    ))
    return (
      <>
        <ListGroup>
          <h3>Forecast</h3>
          {renderList}
        </ListGroup>
      </>
    );
  }
}

export default Weather;
