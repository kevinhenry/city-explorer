import React from 'react';
import axios from 'axios';
import City from './City.js';
import Error from './error.js';
import Movies from './Movies.js';
import Search from './Search.js';
import Weather from './Weather.js';

import './App.css';
// import { response } from 'express';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearch = async (city) => {
    await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`)
      .then(response => response.data[0])
      .then(cityData => {
        this.setState({
          citySearchedFor: cityData,
          cityErrMsg: ''
        });
        this.getWeatherData(cityData);
        this.getMovies(city);
      })
      .catch(error => {
        this.setState({
          citySearchedFor: '',
          cityErrMsg: error.message
        });
      }); 
  }
  // handleShowSearch = () => {
  //   this.setState({haveWeSearchedYet: false});
  // }

  // handleSearch = async(citySearchedFor) => {
  //   console.log('searched' , citySearchedFor);

  // getWeatherData = async() => {
  //   const weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`);
  // }

  getWeatherData = cityData => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`, {
      params: {
        lat: cityData.lat,
        lon: cityData.lon
      }
    })
      .then(response => {
        this.setState({
          weatherData: response.data,
          weatherErrMsg: ''
        });
      })
      .catch(error => {
        this.setState({
          weatherData: '',
          weatherErrMsg: error.message
        });
      });
  }

  getMovies = location => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`, {
      params: {
        location: location
      }
    })
      .then(response => {
        this.setState({
          movieData: response.data,
          movieErrMsg: ''
        });
      })
      .catch(error => {
        this.setState({
          movieData: '',
          movieErrMsg: error.message
        });
      });
  }
  
  render() {
    console.log(this.state);
    return (
      <>
        <h1>City Explorer</h1>    
        {this.state.haveWeSearchedYet ?
          <City handleShowSearch={this.handleShowSearch} cityData={this.state.locationData} /> :
          <Search handleSearch={this.handleSearch} />}
        {this.state.citySearchedFor ? <City cityData={this.state.citySearchedFor} /> : ''}
        {this.state.cityErrMsg ? <Error cityErrMsg={this.state.cityErrMsg} /> : ''}
        {this.state.weatherData ? <Weather data={this.state.weatherData} /> : ''}
        {this.state.weatherErrMsg ? <Error weatherErrMsg={this.state.weatherErrMsg} /> : ''}
        {this.state.movieData ? <Movies movies={this.state.movieData} /> : ''}
        {this.state.movieErrMsg ? <Error movieErrMsg={this.state.movieErrMsg} /> : ''}
      </>  
    )
  }
}
// what happened?
// testing remote connection

export default App;
