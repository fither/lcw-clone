import { useState } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../actions/user';

function Register(props) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const registerHandler = async (event) => {
    event.preventDefault()

    if(!validateEmail(email) || !checkPassword()) {
      return;
    }

    const auth = {
      Name: name,
      Surname: surname,
      Username: username,
      emailAddress: email,
      Password: password
    }

    props.actions.register(auth);
  }
  
  const checkPassword = () => {
    return (
      !!password &&
      !!passwordAgain &&
      password !== '' &&
      passwordAgain !== '' &&
      password === passwordAgain
    )
  }

  const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return (
    <div>
      <div className="col-12 col-md-6 h-100 w-100 justify-content-center d-flex">
        <form className="form" onSubmit={registerHandler}>
          <div className="form-group mb-2">
            <label htmlFor="firstname">Name</label>
            <input
              type="text"
              id="firstname"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="lastname">Surname</label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password-again">Password (Again)</label>
            <input
              type="password"
              id="password-again"
              className="form-control"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            ></input>
          </div>
          {
            props.result ? <p>{props.result}</p> : ''
          }
          <div className="form-group mb-2">
            <div className="form-action">
              <button 
                type="submit"
                className="btn btn-primary"
                disabled={props.isLoading}
              >Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    result: state.user.registerResult,
    isLoading: state.user.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      register: bindActionCreators(actions.register, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);