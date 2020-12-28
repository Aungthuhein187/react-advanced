import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

class MovieList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(currentUser) => (
          <React.Fragment>
            <div>Movie List {currentUser.name}</div> <MovieRow />
          </React.Fragment>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
