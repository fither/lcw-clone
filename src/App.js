import { Fragment } from 'react';
import Header from './components/layout/header';
import Main from './components/layout/main';
import { ToastContainer } from 'react-toastify';
import './style/style.scss';
import ConfirmCookies from './components/layout/confirmCookies';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <ToastContainer />
      <ConfirmCookies />
    </Fragment>
  )
}

export default App;