import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Person from '../../pages/person';
import Auth from '../../pages/auth';
import Users from '../../pages/users';
import Products from '../../pages/products';
import classes from '../../style/layout/main.module.css';

export default class Main extends Component {
  render() {
    return (
      <main className={classes['main-wrapper']}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route exact path="/person">
            <Person />
          </Route>
          <Route path="/person/:person">
            <Person personName="John" />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    )
  }
}