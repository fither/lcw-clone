import { createContext, useState } from "react";

const PeopleContext = createContext({
  people: [],
  totalPeople: 0,
  isLoading: false,
  addPerson: (person) => {},
  removePerson: (personId) => {},
  fetchPeople: () => {},
  isPersonExist: (person) => {}
});

export function PeopleContextProvider(props) {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiURL = 'https://react-learning-304fa-default-rtdb.firebaseio.com/users.json';

  async function fetchPeopleHandler() {
    setIsLoading(true);
    await fetch(apiURL)
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
        setPeople(people);
        setIsLoading(false);
      });
  }

  async function addPersonHandler(person) {
    await fetch(
      apiURL,
      {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      fetchPeopleHandler();
      return '';
    });
  }

  async function removePersonHandler(person) {
    await fetch(
      apiURL,
      {
        method: 'DELETE',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      fetchPeopleHandler();
    });
  }

  async function isPersonExistHandler(person) {
    return people.some((p) => 
      p.name.first === person.name.first && 
      p.name.last === person.name.last
    );
  }

  const context = {
    people: people,
    totalPeople: people.length,
    isLoading: isLoading,
    isPersonExist: isPersonExistHandler,
    addPerson: addPersonHandler,
    removePerson: removePersonHandler,
    fetchPeople: fetchPeopleHandler
  };

  return <PeopleContext.Provider value={context}>
    { props.children }
  </PeopleContext.Provider>
}

export default PeopleContext;