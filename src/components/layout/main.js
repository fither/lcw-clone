import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../utils/authComponent';
import Home from '../../pages/home';
import Person from '../../pages/person';
import ListUsers from '../../pages/users/listUsers'
import Products from '../../pages/products';
import Login from '../../pages/users/login';
import Logout from '../../pages/users/logout';
import Register from '../../pages/users/register';

const Main = (props) => {
  return (
    <main className="container">
      {
        <Switch>
          <PrivateRoute exact path="/" component={Home}></PrivateRoute>
          <PrivateRoute exact path="/person" component={Person}></PrivateRoute>
          <PrivateRoute exact path="/users" component={ListUsers}></PrivateRoute>
          <PrivateRoute exact path="/products" component={Products}></PrivateRoute>
          <Route exact path="/users/login" component={Login}></Route>
          <Route exact path="/users/logout" component={Logout}></Route>
          <Route exact path="/users/register" component={Register}></Route>
        </Switch>
      }
    </main>
  )
}

export default Main;