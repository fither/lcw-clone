import { useState } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../actions/user';
import validate from "../../utils/validation";

function Register(props) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const registerHandler = async (event) => {
    event.preventDefault();

    if(!checkForm()) {
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

  const checkEmail = () => {
    setEmailError('');
    if(email.replaceAll(' ', '') === '') {
      setEmailError('Lütfen email adresinizi girin.');
      return false;
    } else if(!validate.email(email)) {
      setEmailError('Lütfen email adresinizi doğru formatta girin.');
      return false;
    }

    return true;
  }

  const checkPassword = () => {
    setPasswordError('');
    if(password.replaceAll(' ', '') === '') {
      setPasswordError('Lütfen parolanızı girin.');
      return false;
    }

    return true;
  }

  const checkForm = () => {
    resetFormErrors();
    if(!checkEmail()) return false;
    if(!checkPassword()) return false;

    return true;
  }

  const resetFormErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  return (
    <div className="register col-12 col-md-6 h-100 w-100 justify-content-center d-flex">
      <form className="form">
        <h2>Üye Kayıt</h2>
        <div className="form-group mb-2">
          <div className="form-input">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              className="form-control"
              placeholder="E-Posta Adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={checkEmail}
            ></input>
          </div>
          <small className={'form-error' + (emailError !== '' ? ' show' : '')}>
            { emailError }
          </small>
        </div>
        <div className="form-group mb-2">
          <div className="form-input">
            <i
              className={'clickable fas fa-eye' + (!showPassword ? '-slash' : '')}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={checkPassword}
            ></input>
          </div>
          <small className={'form-error' + (passwordError !== '' ? ' show' : '')}>
            { passwordError }
          </small>
        </div>
        {/* <div className="form-group mb-2">
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
        </div> */}
        {/* <div className="form-group mb-2">
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
        </div> */}
        {/* <div className="form-group mb-2">
          <label htmlFor="password-again">Password (Again)</label>
          <input
            type="password"
            id="password-again"
            className="form-control"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
          ></input>
        </div> */}
        {
          props.result ? <p>{props.result}</p> : ''
        }
        <div className="form-group mb-2">
          <div className="form-action">
            <button 
              type="submit"
              className="btn btn-primary d-block w-100"
              disabled={props.isLoading}
              onClick={registerHandler}
            >
              Üye Ol
            </button>
          </div>
        </div>
      </form>
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