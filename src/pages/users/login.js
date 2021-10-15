import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/user';
import { getToken } from '../../utils/token';

function Login(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (event) => {
    event.preventDefault();

    const auth = {
      Username: username,
      Password: password
    }
    props.actions.login(auth);
  }

  const isLoggedIn = getToken();

  return (
    isLoggedIn ? <Redirect to="/"></Redirect>:
    <Fragment>
      <div className="col-12 col-md-6 h-100 w-100 justify-content-center d-flex">
        <form className="form" onSubmit={loginHandler}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              className="form-control"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="text" 
              id="password" 
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          {
            <p>{ props.error ? props.error.data : '' }</p>
          }
          <button 
            type="submit"
            className="btn btn-primary"
            disabled={props.isLoading}
          >Login</button>
        </form>
      </div>
    </Fragment>
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
      login: bindActionCreators(userActions.login, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);