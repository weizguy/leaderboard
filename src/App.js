import React, { Component } from 'react';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        <hr />
        <Users />
      </div>
    );
  }
}

export default App;
