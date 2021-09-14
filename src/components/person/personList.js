import React, { useEffect, useContext } from 'react';
import PeopleContext from '../../store/people-context';
import PersonItem from './personItem';

function PersonList(props) {
  const peopleCtx = useContext(PeopleContext); 
  
  const people = peopleCtx.people;
  const isLoading = peopleCtx.isLoading;
  
  
  function fetchPeople() {
    peopleCtx.fetchPeople();
  }

  useEffect(() => {
    fetchPeople();
    // eslint-disable-next-line
  }, []);
  
  if(!isLoading) {
    return (
      <React.Fragment>
        {
          people.map((person) => {
            return (
              <PersonItem 
                key={person.id} 
                person={person} 
                fetch={() => fetchPeople()}
                inFavorites={false}
              ></PersonItem>
            )
          })
        }
      </React.Fragment>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default PersonList;