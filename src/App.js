import { Fragment } from 'react';
import Header from './components/layout/header';
import Main from './components/layout/main';
import { ToastContainer } from 'react-toastify';
import './style/style.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <ToastContainer />
    </Fragment>
  )
}

export default App;