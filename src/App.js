import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie'
const movies = [
  {
    id: 1,
    title: "Start Wars"
  },
  {
    id: 2,
    title: 'Spider Man'
  },
  {
    id: 3,
    title: '36th Chamber of Shaolin'
  },
  {
    id: 4,
    title: 'The Dark Knight'
  }
];


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}
export default App;
