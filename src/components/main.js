import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Person from './person/person';
import Auth from './auth/auth';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth authName="john"/>
          </Route>
          <Route exact path="/person">
            <Person />
          </Route>
          <Route path="/person/:person">
            <Person personName="John" />
          </Route>
        </Switch>
      </main>
    )
  }
}