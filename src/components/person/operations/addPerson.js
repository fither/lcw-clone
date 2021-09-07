import React from 'react';

export default class AddPerson extends React.Component {
  types = {
    NAME: 'name',
    GENDER: 'gender',
    ID: 'id'
  };

  state = {
    name: '',
    gender: '',
    id: ''
  };

  textChanged = (event, type) => {
    this.setState({ [type]: event.target.value });
  };

  render() {
    return (
      <div style={{ margin: '0 auto' }}>
        <div>
          <div>
            <p>Name</p>
            <input type="text" value={this.state.name} onChange={(event) => this.textChanged(event, this.types.NAME)} />
          </div>
          <div>
            <p>Gender</p>
            <input type="text" value={this.state.gender} onChange={(event) => this.textChanged(event, this.types.GENDER)} />
          </div>
          <div>
            <p>ID</p>
            <input type="text" value={this.state.id} onChange={(event) => this.textChanged(event, this.types.ID)} />
          </div>
        </div>
        <button className="button info" onClick={() => this.props.addPerson(this.state)}>Ekle</button>
      </div>
    )
  }
}