import React, { Component } from 'react';

class ClassBased extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.isAuthenticated ? "" : "Not "} Authenticated</h1>
        <h2>{this.props.authName}</h2>
        <button onClick={this.props.authenticate}>Auth Me</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default ClassBased;