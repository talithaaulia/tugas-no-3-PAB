//  CLASS COMPONENT  //

import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
      <h1 style={{ margin: "10px" }}>Pengenalan React Tingkat Dasar</h1>
      <h1 style={{ margin: "10px" }}>Counter</h1>
        <h2 style={{ margin: "10px" }}>{this.state.count}</h2>
        <button onClick={this.increment} style={{ margin: "10px" }}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

export default CounterApp;

