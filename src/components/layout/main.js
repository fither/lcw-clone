import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../utils/authComponent';
import Home from '../../pages/home';
import ListUsers from '../../pages/users/listUsers'
import Products from '../../pages/products';
import Categories from '../../pages/categories';
import Login from '../../pages/users/login';
import Logout from '../../pages/users/logout';
import Register from '../../pages/users/register';
import Confirm from '../../pages/users/confirm';

const Main = (props) => {
  return (
    <div className="container-fluid main-wrapper">
      {
        <Switch>
          <PrivateRoute exact path="/" component={Home}></PrivateRoute>
          <PrivateRoute exact path="/users" component={ListUsers}></PrivateRoute>
          <PrivateRoute exact path="/products" component={Products}></PrivateRoute>
          <PrivateRoute exact path="/categories" component={Categories}></PrivateRoute>
          <Route exact path="/users/login" component={Login}></Route>
          <Route exact path="/users/logout" component={Logout}></Route>
          <Route exact path="/users/register" component={Register}></Route>
          <Route exact path="/users/confirm" component={Confirm}></Route>
        </Switch>
      }
    </div>
  )
}

export default Main;