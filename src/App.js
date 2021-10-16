import { Fragment } from 'react';
import Header from './components/layout/header';
import Main from './components/layout/main';
import { ToastContainer } from 'react-toastify';

const App = (props) => {
  return (
    <Fragment>
      <Header />
      <Main />
      <ToastContainer />
    </Fragment>
  )
}

export default App;