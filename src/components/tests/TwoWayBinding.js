import React, { Component } from 'react';

class TwoWayBinding extends Component {
  state = {
    oneWayColor: 'red',
    oneWayColor1: 'blue',
    twoWayText: 'two-way-binding...'
  };

  textChanged = (event) => {
    console.info('Text changed => ', event.target.value);
    this.setState({ twoWayText: event.target.value });
  };

  clickHandler = () => {
    console.log('Color will be changed !');
    this.setState({
      oneWayColor: this.state.oneWayColor === 'red' ? 'blue' : 'red',
      oneWayColor1: this.state.oneWayColor1 === 'red' ? 'blue': 'red'
    });
  }

  render() {
    return (
      <div className="center">
        <hr />
        <h2>Two-Way Binding</h2>
        <input type="text" value={this.state.twoWayText} onChange={(event) => this.textChanged(event)} />
        <h3>{ this.state.twoWayText }</h3>
        <hr />
        <h2>One-Way Binding</h2>
        <p>The color is &gt; { this.state.oneWayColor }</p>
        <button style={{ backgroundColor: this.state.oneWayColor }} onClick={() => this.clickHandler()}>One Way Color</button>
        <p>The color is &gt; { this.state.oneWayColor1 }</p>
        <button style={{ backgroundColor: this.state.oneWayColor1 }} onClick={() => this.clickHandler()}>One Way Color1</button>
      </div>
    );
  }
}

export default TwoWayBinding;