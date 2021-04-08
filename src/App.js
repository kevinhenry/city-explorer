import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search.js';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      director: '',
      fetchData: false
      // haveWeSearchedYet: false,
      // citySearchedFor: '',
    }
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


  handleShowSearch = () => {
    this.setState({haveWeSearchedYet: false});
  }

  handleSearch = (citySearchedFor) => {
    console.log('searched' , citySearchedFor);
    this.setState({
      haveWeSearchedYet: true,
      citySearchedFor: citySearchedFor
    });
  }
  render() {
    return (
      <>
        <h1 onClick={this.fetchData}>City Explorer</h1>
        {/* { this.state.fetchData ? 
          (<>
          <h2>{this.state.title}</h2>
          <h3>Directed by {this.state.director}</h3>
          </>) 
          : ''} */}
        {this.state.haveWeSearchedYet ?
          <button onClick={this.handleShowSearch}>Search again</button> :
          <Search handleSearch={this.handleSearch} />}
      </>  
    )
  }
}

export default App;
