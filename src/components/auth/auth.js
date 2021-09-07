import { Component } from 'react';
import ClassBased from '../tests/ClassBased';

class App extends Component {
  state = {
    isAuthenticated: false
  };

  authenticate = (e) => {
    e.preventDefault();
    this.setState({ isAuthenticated: true });
  }

  logout = (e) => {
    e.preventDefault();
    this.setState({ isAuthenticated: false });
  }

  changeState = () => {
    this.setState({ type: 'functional' });
  }

  render() {
    return (
      <div className="App">
        <ClassBased
          isAuthenticated={this.state.isAuthenticated}
          authenticate={this.authenticate}
          logout={this.logout}
          authName={this.props.authName}
        ></ClassBased>
      </div>
    )
  }
}

export default App;
