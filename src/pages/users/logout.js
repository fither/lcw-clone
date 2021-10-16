import { clearToken } from '../../utils/token';
import { Redirect } from 'react-router';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/user'
import { connect } from 'react-redux';

function Logout(props) {
  const logout = () => {
    clearToken();
    props.actions.logout();
  }

  useEffect(() => {
    logout();
    // eslint-disable-next-line
  }, []);

  const isLogged = !!props.user && Object.keys(props.user).length;

  return (
    !isLogged ? (
      <p>Not Logged</p>
    ) : (
      <div>
        <Redirect to="/users/login"></Redirect>
      </div>
    )
  )
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(actions.logout, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);