import React from 'react';
import '../../../style/person.css';

export default class PersonList extends React.Component {
  render() {
    return (
      <div className="person-wrapper">
        <img className="person-image" src={this.props.person.picture.medium} alt="Profile Pic" />
        <h2 className="person-name">{this.props.person.name.first}</h2>
        <h3 className="person-gender">{this.props.person.gender}</h3>
        <button className="person-action" onClick={this.props.click}>Sil</button>
      </div>
    )
  }
}