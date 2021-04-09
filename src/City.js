import React from 'react';
// import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

class City extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.props.handleShowSearch}>Search again</button>
        <Jumbotron>
        <h3>{this.props.cityData.display_name}</h3>
        <h5>{this.props.cityData.lat}, {this.props.cityData.lon}</h5>
        <img src={ `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`  } alt="city map" />
        </Jumbotron>
      </>
    )
  }
}

export default City;
