import React, { useRef, useContext } from 'react';
import PeopleContext from '../../store/people-context';
import classes from '../../style/person/addPerson.module.css';
import { useHistory } from 'react-router-dom';

function AddPerson(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();

  const peopleCtx = useContext(PeopleContext);


  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;

    const person = {
      name: {
        first: enteredFirstName,
        last: enteredLastName
      }
    }

    peopleCtx.isPersonExist(person)
    .then((response) => {
      if(!response) {
        peopleCtx.addPerson(person)
        .then(() => {
          history.replace('/person/list');
        })
      } else {
        console.log('this user exist');
      }
    });
  }

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