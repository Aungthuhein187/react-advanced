import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import './App.css';
import User from './hooks/User';

class App extends Component {
  state = { user: { name: 'Aung' } };
  render() {
    return (
      // <UserContext.Provider value={this.state.user}>
      //   <MoviePage />
      // </UserContext.Provider>
      <User />
    );
  }
}

export default App;
