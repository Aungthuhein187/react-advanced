import React, { Component } from 'react';
import UserContext from './userContext';

class MovieList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(currentUser) => <div>Movie List {currentUser.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
