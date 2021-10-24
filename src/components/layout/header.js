import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../utils/token';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../../actions/user'
import Search from '../header/search';
import TopbarItems from '../header/topbar-items';
import HeaderAccount from '../header/header-account';
import Logo from '../shared/logo';

function Header(props) {
  const checkUser = () => {
    if(!!getToken()) {
      props.actions.getCurrentUser()
    }
  }

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  const isLogged = !!props.user && Object.keys(props.user).length;

  return (
    <div className="header">
      <h6 style={{position: 'absolute', left: '0', top: 0}}>
        Build Type: { process.env.NODE_ENV }
      </h6>
      <div className="row g-0 justify-content-around">
        <div className="col col-3 d-flex align-items-center">
          <Logo />
        </div>
        <div className="col col-6">
          <Search />
        </div>
        <div className="col col-3 d-flex justify-content-end">
          <HeaderAccount isLogged={isLogged} />
        </div>
      </div>
      <div className="row">
        <TopbarItems />
      </div>
    </div>
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