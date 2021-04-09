import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Jumbotron from 'react-bootstrap/Jumbotron';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }
  handleFormSubmitted = (event) => {
    // let the Search component handle the form weirdness
    event.preventDefault();
    // grab the text box info to send to the parent
    // send the information to the app component
    this.props.handleSearch(this.textInput.current.value);
  }
  render() {
    return (
      // <form onSubmit={this.handleFormSubmitted}>
      //   <input type="text" ref={this.textInput} />
      //   <input type="submit" />
      // </form>

      <Form onSubmit={this.handleFormSubmitted}>
        <Form.Control size="lg" type="text" placeholder="City Name?" ref={this.textInput}/>
        <br />
        <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    )
  }
}

export default Search;