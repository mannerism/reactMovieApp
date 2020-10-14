import React from "react";

class App extends React.Component {
  //React automatically is going to execute the render function of your class component
  //The reason why we are using a class component is because of 'state'
  state = {
    count: 0,
  };
  add = ()  => {
    // this.state.count = 1; this is not recommended to set state because this won't call render function. You should use setstate instead.
    this.setState({ count: this.state.count + 1 });
  };
  minus = ()  => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
