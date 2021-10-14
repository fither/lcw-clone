import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = {
    isMenuOpen: false,
    isDropdownOpen: false
  }

  toggleMenu = () => {
    const isMenuOpen = this.state.isMenuOpen;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  }

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  }

  render() {
    const show = this.state.isMenuOpen ? 'show' : '';
    const dropdownShow = this.state.isDropdownOpen ? 'show' : '';

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand" href="/">

          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
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
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auth">Auth</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseLeave={this.closeDropdown}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="/person"
                  onMouseOver={this.openDropdown}
                >Person</Link>
                <div
                  className={"dropdown-menu " + dropdownShow}
                >
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
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}