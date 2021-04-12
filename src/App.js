import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'button';
import City from './City.js';
// import Error from './error.js';
import Search from './Search.js';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      haveWeSearchedYet: false,
      citySearchedFor: '',
      latOfCity: '',
      lonOfCity: '',
      errorCode: '',
      // title: '',
      // director: '',
      // fetchData: false
    };
  }

  handleShowSearch = () => {
    this.setState({haveWeSearchedYet: false});
  }

  handleSearch = async(citySearchedFor) => {
    console.log('searched' , citySearchedFor);

    // make a request to LocationIQ
    let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearchedFor}&format=json`);
    let lat = locationResponseData.data[0].lat;
    let lon = locationResponseData.data[0].lon;
    let errorCode = locationResponseData.status;
    console.log(locationResponseData);
    this.setState({
      haveWeSearchedYet: true,
      citySearchedFor: citySearchedFor,
      locationData: locationResponseData.data[0],
      latOfCity: lat,
      lonOfCity: lon, 
      errorCode: errorCode,
    });
  }
  // } catch (err) {
  //   console.log(error.message);
  //   this.setState({
  //     returnsError: true,
  //     error: err.message,
  //   });
  
  handleButtonClick = async () => {
    let weatherData = await axios.get('http://localhost:3002/weather');
    console.log(weatherData);
    this.setState({
      data: weatherData.data
    });
  }

  // fetchData = async() => {
  //   console.log('fetching');
  //   // get the data from the API and store it in a variable
  //   let starWarsData = await axios.get('https://swapi.dev/api/people/1/');
  //   console.log(starWarsData);
  //   // use the variable to have have fun
  //   let filmData = await axios.get(starWarsData.data.films[0]);
  //   console.log(filmData);
  //   this.setState({
  //     title: filmData.data.title,
  //     director: filmData.data.director,
  //     fetchData: true
  //   })
  // }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        {/* { this.state.fetchData ? 
          (<>
          <h2>{this.state.title}</h2>
          <h3>Directed by {this.state.director}</h3>
          </>) 
          : ''} */}
        {this.state.haveWeSearchedYet ?
          <City handleShowSearch={this.handleShowSearch} cityData={this.state.locationData} /> :
          <Search handleSearch={this.handleSearch} />}
      </>  
    )
  }
}

export default App;
