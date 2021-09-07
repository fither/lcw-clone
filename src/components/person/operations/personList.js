import React from 'react';
import '../../../style/person.css';

export default class PersonList extends React.Component {
  state = {
    mouseOverName: ''
  }

  onMouseOverHandler(name) {
    // alert(`Gerçekten ${name} kişisini silecek misin?`);
    this.setState({ mouseOverName: name });
  }

  onMouseOutHandler() {
    this.setState({ mouseOverName: '' });
  }

  render() {
    let mouseOverDialog = null;

    if (this.state.mouseOverName !== '') {
      mouseOverDialog = (
        <div className="person-delete-dialog">
          Gerçekten {this.state.mouseOverName} kişisini silecek misin?
        </div>
      )
    }

    return (
      <div className="person-wrapper">
        <img className="person-image" src={this.props.person.picture.medium} alt="Profile Pic" />
        <h2 className="person-name">{this.props.person.name.first}</h2>
        <h3 className="person-gender">{this.props.person.gender}</h3>
        <button
          className="person-action"
          onMouseOver={() => this.onMouseOverHandler(this.props.person.name.first)}
          onMouseOut={() => this.onMouseOutHandler()}
          onClick={this.props.click}
        >
          Sil
        </button>
        {mouseOverDialog}
      </div>
    )
  }
}