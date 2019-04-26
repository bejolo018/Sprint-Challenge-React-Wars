import React, { Component } from 'react';
import './App.css';
import Char from './components/Character';

const chars = [
  {
    name: '',
    vehicles: '',
    films: ''
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      charsOnState: chars,
      char: {
        name: '',
        vehicles: '',
        films: '',
      }
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='Characters'>
          {this.state.starwarsChars.map(charsFromMap => {
            return <chars charsProp={charsFromMap} />;
          })}
        </div>
        <Char />
      </div>
    );
  }
}

export default App;
