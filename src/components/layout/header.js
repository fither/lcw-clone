import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../utils/token';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user';

function Header() {
  const [show, setShow] = useState('');
  const [usersMenu, setIsUsersMenuOn] = useState('');
  const [personsMenu, setIsPersonsMenuOn] = useState('');

  const toggleMenu = () => {
    show === '' ? setShow('show') : setShow('');
  }

  const openDropdown = (item) => {
    item === 'users' ? setIsUsersMenuOn('show') : setIsPersonsMenuOn('show');
  }

  const closeDropdown = (item) => {
    item === 'users' ? setIsUsersMenuOn('') : setIsPersonsMenuOn('');
  }

  const isLogged = getToken();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="/">

        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            "navbar-collapse justify-content-center collapse " + show
          }
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li 
              className={!isLogged ? 'nav-item dropdown' : 'nav-item'}
              onMouseLeave={() => closeDropdown('users')}
            >
              <Link 
                className={!isLogged ? 'dropdown-toggle nav-link' : 'nav-link'}
                to="/users"
                onMouseOver={() => openDropdown('users')}
              >
                Users
              </Link>
              {
                !isLogged ? (
                  <div className={ "dropdown-menu " + usersMenu }>
                    <Link className="dropdown-item" to="/users/register">Register</Link>
                    <Link className="dropdown-item" to="/users/login">Login</Link>
                  </div>
                ) : ''
              }
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseLeave={() => closeDropdown('person')}
            >
              <Link
                className="nav-link dropdown-toggle"
                to="/person"
                onMouseOver={() => openDropdown('person')}
              >Person</Link>
              <div className={ "dropdown-menu " + personsMenu }>
                <Link className="dropdown-item" to="/person/list">
                  Person List
                </Link>
                <Link className="dropdown-item" to="/person/add">
                  Person Add
                </Link>
                <Link className="dropdown-item" to="/person/favorites">
                  Favorites
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/person">
                  #
                </Link>
              </div>
            </li>
            {
              isLogged ? 
              <li className="nav-item">
                <Link className="nav-link" to="/users/logout">Logout</Link>
              </li>:
              ''
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user.user,
    error: state.user.error,
    isLoading: state.user.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(userActions.login, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);