import { Fragment } from 'react';
import Header from './components/layout/header';
import Main from './components/layout/main';

const App = (props) => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  )
}

export default App;