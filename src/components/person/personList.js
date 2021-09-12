import { useState, useEffect } from 'react';
import QuestionYesNo from '../shared/questionYesNo';
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
            <div className="person-wrapper" key={person.id}>
              <h2 className="person-firstname">{person.name.first}</h2>
              <h3 className="person-lastname">{person.name.last}</h3>
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(person)}
              >
                Sil
              </button>
            </div>
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