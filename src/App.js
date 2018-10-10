import React, { Component } from 'react';
import './App.css';
import GenerateSimpson from './Generate'
import DisplaySimpson from './DisplaySimpson'


class App extends Component {

  state = {
    simpson:  []
  }

  getSimpson() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpson:  data[0],
        });
    });
}

componentDidMount() {
  this.getSimpson()
}



  render() {
    return (
      <div className="App">
      <GenerateSimpson  selectSimpson={() =>  this.getSimpson()} />
      <DisplaySimpson  simpsonPass={this.state.simpson}  />
      </div>
    );
  }
}

export default App;
