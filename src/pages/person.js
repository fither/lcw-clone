import React from 'react';
import AddPerson from '../components/person/addPerson';
import PersonList from '../components/person/personList';
import { Link, Switch, Route } from 'react-router-dom';
import classes from '../style/person/person-header.module.css';

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <nav className={classes['person-navbar']}>
          <ul>
            <li><Link to="/person/list">Person List</Link></li>
            <li><Link to="/person/add">Person Add</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/person/list">
            <PersonList />
          </Route>
          <Route path="/person/add">
            <AddPerson />
          </Route>
        </Switch>
      </div>
    )
  }
}