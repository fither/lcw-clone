import React, { useRef } from 'react';
import classes from '../../style/person/addPerson.module.css';
import { useHistory } from 'react-router-dom';

function AddPerson(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();

  const apiURL = 'https://react-learning-304fa-default-rtdb.firebaseio.com/users.json';

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;

    const person = {
      name: {
        first: enteredFirstName,
        last: enteredLastName
      }
    }

    addPerson(person);
  }


  const addPerson = (person) => {
    fetch(
      apiURL,
      {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/person/list');
    });
  };

  return (
    <form className={classes['form-wrapper']} onSubmit={submitHandler}>
      <div className="form-item">
        <label htmlFor="user-name">First Name: </label>
        <input
          type="text"
          id="user-firstname"
          ref={firstNameInputRef}
        />
      </div>
      <div className="form-item">
        <label htmlFor="user-gender">Last Name: </label>
        <input
          type="text"
          id="user-lastname"
          ref={lastNameInputRef}
        />
      </div>
      <div className="form-actions">
        <button
          className="btn btn-primary"
          type="submit"
        >
          Ekle
        </button>
      </div>
    </form>
  )
}

export default AddPerson;