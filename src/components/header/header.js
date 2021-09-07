import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../style/header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth">Auth</Link></li>
            <li><Link to="/person">Person</Link></li>
            <li><Link to={{ pathname: '/person/john' }}>Person John</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}