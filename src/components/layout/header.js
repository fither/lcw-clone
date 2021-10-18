import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '../../utils/token';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../../actions/user'

function Header(props) {
  const [show, setShow] = useState('');
  const [usersMenu, setIsUsersMenuOn] = useState('');

  const checkUser = () => {
    if(!!getToken()) {
      props.actions.getCurrentUser()
    }
  }

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  const toggleMenu = () => {
    show === '' ? setShow('show') : setShow('');
  }

  const openDropdown = (item) => {
    if(item === 'users') {
      setIsUsersMenuOn('show');
    }
  }

  const closeDropdown = (item) => {
    if(item === 'users') {
      setIsUsersMenuOn('');
    }
  }

  const isLogged = !!props.user && Object.keys(props.user).length;

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <h6 style={{position: 'absolute', left: '0', top: 0}}>
          Build Type: { process.env.NODE_ENV }
        </h6>
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
                    <Link className="dropdown-item" to="/users/confirm">Confirm Account</Link>
                  </div>
                ) : ''
              }
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
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
  return {
    user: state.user.user,
    error: state.user.error,
    isLoading: state.user.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCurrentUser: bindActionCreators(getCurrentUser, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);