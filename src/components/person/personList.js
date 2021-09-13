import { useState, useEffect } from 'react';
import QuestionYesNo from '../shared/questionYesNo';
import PersonItem from './personItem';
import '../../style/person/person.css';

function PersonList(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiURL = 'https://react-learning-304fa-default-rtdb.firebaseio.com/users.json';
  
  
  useEffect(() => {
    setIsLoading(true);
    fetchPeople()
  }, []);

  function fetchPeople() {
    fetch(apiURL)
      .then(results => { return results.json(); })
      .then(data => {
        let people = [];
        for (const key in data) {
          const person = {
            id: key,
            ...data[key]
          }
          people.push(person);
        }
        setIsLoading(false);
        setPeople(people);
      });
  }

  function deleteHandler(person) {
    setModalTitle('Kişi Silme');
    setModalDesc(`${person.name.first} kişisini silmek istediğinize emin misiniz?`);
    setModalIsOpen(true);
  }

  function toggleFavoriteHandler(person) {

  }

  function questionResult(result) {
    if (result !== '') {
      setModalIsOpen(false);

      if (result === 'yes') {
        deletePerson();
      }
    }
  }

  function deletePerson(person) {
    fetch(
      apiURL,
      {
        method: 'DELETE',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(() => {
        fetchPeople();
      })
  };


  if(!isLoading) {
    return (
      <div>
        {modalIsOpen && <QuestionYesNo title={modalTitle} desc={modalDesc} result={questionResult} />}
  
        {
          people.map((person) => {
            return (
              <PersonItem 
                key={person.id} 
                person={person} 
                deleteHandler={deleteHandler} 
                addToFavoriteHandler={toggleFavoriteHandler}
              ></PersonItem>
            )
          })
        }
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default PersonList;