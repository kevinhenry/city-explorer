import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        <h1>Forecast</h1>
        {this.props.data.map((eachDay, index) => (
        <li key={index}>
        {eachDay.date}
        {eachDay.description}
        </li>
        ))}
      </>
    );
  }
}

export default Weather;