import React from 'react';
import AddPerson from './operations/addPerson';
import PersonList from './operations/personList';
import NewPersonList from './operations/newPersonList';
import { Link, Switch, Route } from 'react-router-dom';
import '../../style/header.css';

export default class Person extends React.Component {
  state = {
    persons: [],
    apiURL: 'https://randomuser.me/api/?results=3'
  };

  showHidePersons = (e) => {
    e.preventDefault();
    const isVisible = this.state.isPersonsVisible;
    this.setState({ isPersonsVisible: !isVisible });
  };

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  addPerson = (person) => {
    const persons = [...this.state.persons];
    persons.push(person);
    this.setState({ persons: persons });
  };

  componentDidMount() {
    fetch(this.state.apiURL)
      .then(results => { return results.json(); })
      .then(data => {
        this.setState({ persons: data.results })
      });
  }

  render() {
    let persons = null;

    persons = (
      <div>
        {
          this.state.persons.map((person, index) => {
            // return <PersonList key={index} person={person} click={() => this.deletePerson(index)} />;
            return <NewPersonList key={index} person={person} deleteHandler={() => this.deletePerson(index)} />;
          })
        }
      </div>
    );

    return (
      <div>
        <div className="person-navbar">
          <nav className="person-navbar">
            <ul>
              <li><Link to="/person/list">Person List</Link></li>
              <li><Link to="/person/add">Person Add</Link></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/person/list">
            {persons}
          </Route>
          <Route path="/person/add">
            <AddPerson addPerson={(person) => this.addPerson(person)} />
          </Route>
        </Switch>
      </div>
    )
  }
}