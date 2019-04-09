import React, { Component } from 'react';
import USERS from './data/users';

class User extends Component {
  render() {
    const { name, league, points, rate, rounds } = this.props.user;
    return (
      <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
        <div>Name: <b>{name}</b></div>
        <div>League: <b>{league}</b></div>
        <div>Points: {points}</div>
        <div>Rate: {rate}</div>
        <div>Rounds: {rounds}</div>
      </div>
    )
  }
}

class Users extends Component {
  render() {
    return (
      <>
        <h2>Player Details</h2>
        <div>
          {
            USERS.map(USER => {
              return (
                <User key={USER.id} user={USER} />
              );
            })
          }
        </div>
      </>
    )
  }
}

export default Users;