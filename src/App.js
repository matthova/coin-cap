import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      cash: 0,
      coins: 10,
      coinData: [],
    };
  }

  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
