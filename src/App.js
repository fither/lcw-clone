import React, { Component } from 'react';
import Header from './components/layout/header';
import Main from './components/layout/main';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}