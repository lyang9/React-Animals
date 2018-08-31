import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: ['Iron Man', 
      'Hulk', 
      'Captain America', 
      'Black Widow', 
      'Thor',
      'Loki',
      'Clint Barton',
      'Nick Fury',
      'Maria Hill']
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avengers: by Lambda</h1>
        </header>
        {this.state.avengers.map(avenger => <div key={avenger}>{avenger}</div>)}
      </div>
    );
  }
}

export default App;
