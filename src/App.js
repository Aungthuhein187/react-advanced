import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import './App.css';

class App extends Component {
  state = { user: { name: 'Aung' } };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <MoviePage />
      </UserContext.Provider>
    );
  }
}

export default App;
