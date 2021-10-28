import { connect } from 'react-redux';
import { useState } from 'react'
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/user';

function Confirm(props) {
  const [email, setEmail] = useState('');
  const [confirmCode, setConfirmCode] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    const confirmForm = {
      EmailAddress: email,
      ConfirmCode: confirmCode
    }

    props.actions.confirm(confirmForm);
  }

  return (
    <div className="col-12 col-md-6 w-100 h-100 d-flex justify-content-center">
      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-code">Confirm Code</label>
          <input
            type="text"
            id="confirm-code"
            className="form-control"
            value={confirmCode}
            onChange={(e) => setConfirmCode(e.target.value)}
          ></input>
        </div>
        {
          props.error ? props.error.data : ''
        }
        {
          props.result ? <p>{props.result}</p> : ''
        }
        <div className="form-action">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={props.isLoading}
          >
            Submit    
          </button>
        </div>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    error: state.user.confirmError,
    result: state.user.confirmResult,
    loading: state.user.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      confirm: bindActionCreators(actions.confirm, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);