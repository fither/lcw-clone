import React, { useContext } from 'react';
import AddPerson from '../components/person/addPerson';
import PersonList from '../components/person/personList';
import Favourites from '../components/person/favourites';
import { Link, Switch, Route } from 'react-router-dom';
import classes from '../style/person/person-header.module.css';
import FavoritesContext from '../store/favourites-context';

export default function Person() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <React.Fragment>
      <nav className={classes['person-navbar']}>
        <ul>
          <li><Link to="/person/list">Person List</Link></li>
          <li><Link to="/person/add">Person Add</Link></li>
          <li><Link to="/person/favorites">Favorites { favoritesCtx.totalFavorites }</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/person/list">
          <PersonList />
        </Route>
        <Route path="/person/add">
          <AddPerson />
        </Route>
        <Route path="/person/favorites">
          <Favourites />
        </Route>
      </Switch>
    </React.Fragment>
  )
}