import React, { Component } from 'react';

class ClassBased extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.isAuthenticated ? "" : "Not "} Authenticated</h1>
        <h2>{this.props.authName}</h2>
        <button onClick={this.props.authenticate}>Auth Me</button>
        <button onClick={this.props.logout}>Logout</button>
      </React.Fragment>
    )
  }
}

export default ClassBased;