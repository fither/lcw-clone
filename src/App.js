import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main';

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