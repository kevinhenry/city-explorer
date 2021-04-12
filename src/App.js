import React from 'react';
import axios from 'axios';
import City from './City.js';
import Error from './error.js';
import Search from './Search.js';
import Weather from './weather.js';

import './App.css';

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

  // handleShowSearch = () => {
  //   this.setState({haveWeSearchedYet: false});
  // }

  // handleSearch = async(citySearchedFor) => {
  //   console.log('searched' , citySearchedFor);

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`, {
      params: {
        lat: cityData.lat,
        lon: cityData.lon,
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
        console.log(error);
      });
    })
    .catch(error => {
      this.setState({
        citySearchedFor: '',
        cityErrMsg: error.message
      });
    }); 
  }
  
  render() {
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
      </>  
    );
  }
}

export default App;
