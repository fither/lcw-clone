import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

function Auth(props) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('');

  const isLoading = false;

  const loginHandler = async (event) => {
    event.preventDefault();

    const auth = {
      Username: username,
      Password: password
    }
    props.actions.login(auth);
  }

  return (
    <React.Fragment>
      <form onSubmit={loginHandler}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input 
          type="text" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {
          <p>{ props.error ? props.error.data : '' }</p>
        }
        <button 
          type="submit"
          disabled={isLoading}  
        >Login</button>
      </form>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    error: state.userReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(userActions.login, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);