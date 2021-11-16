import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../utils/token';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../../actions/user'
import Search from '../header/search';
import TopbarItems from '../header/topbar-items';
import HeaderAccount from '../header/header-account';
import Logo from '../shared/logo';
import HamburgerMenu from '../header/hamburger-menu';

function Header(props) {
  const [message, setMessage] = useState('');
  const checkUser = () => {
    if(!!getToken()) {
      props.actions.getCurrentUser()
    }
  }

  const messages = [
    "120 Gün Ücretsiz İade Hakkı - 79 İlde 500'den Fazla Mağazadan Anında İade & Değişim",
    "Mağazadan Hemen Gelsin - Online Alışverişlerde 24 Saat İçinde Adrese Teslim",
    "Hemen Gel Al - Kargo Beklemeden Aynı Gün İçinde Mağazadan Teslim Al",
    "Kapıda Nakit Ödeme Seçeneği - Farklı Ödeme Seçenekleri ile Ödeme Kolaylığı"
  ]

  let messageIndex = 0;
  let messageDelay = 3;
  let messageInterval = null;

  const startMessageInterval = () => {
    if(messageInterval === null) {
      setMessage(messages[messageIndex]);
      messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        setMessage(messages[messageIndex]);
      }, messageDelay * 1000);
    }
  }
  
  const clearMessageInterval = () => {
    if(typeof messageInterval !== undefined) {
      clearInterval(messageInterval);
    }
  }

  useEffect(() => {
    checkUser();
    startMessageInterval();

    return () => {
      clearMessageInterval();
    }
    // eslint-disable-next-line
  }, []);

  const isLogged = !!props.user && Object.keys(props.user).length;

  return (
    <div className="header">
      <h6 style={{position: 'absolute', left: '0', top: 0}}>
        Build Type: { process.env.NODE_ENV }
      </h6>
      <div className="row g-0 justify-content-center">
        { message }
      </div>
      <hr className="my-1 mx-0 w-100"/>
      <div className="row g-0 justify-content-between">
        <div className="header__hamburger-col d-flex d-md-none col-1">
          <HamburgerMenu />
        </div>
        <div className="header__logo-col col col-11 col-sm-6 col-lg-3">
          <Logo />
        </div>
        <div className="header__search-col col col-6 d-none d-lg-flex">
          <Search />
        </div>
        <div className="header__account-col col col-12 col-sm-6 col-lg-3">
          <HeaderAccount isLogged={isLogged} />
        </div>
        <div className="header__search-bottom-col col col-12 d-lg-none mb-2">
          <Search />
        </div>
      </div>
      <div className="row d-none d-lg-flex">
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