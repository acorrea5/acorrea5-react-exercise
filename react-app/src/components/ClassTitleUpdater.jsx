import React, { Component } from "react";

class ClassTitleUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "",
    };
  }

  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
    }
    if (this.state.count === 10) {
      alert("Count is 10!");
    }
  }

  componentWillUnmount() {
    console.log(`Cleanup: Count was ${this.state.count}`);
  }

  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decreaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
        <div>
          <h1>Current Count: {this.state.count}</h1>
          <button onClick={this.increaseCount}>Increase Count</button>
          <button onClick={this.decreaseCount}>Decrease Count</button>
        </div>
    );
  }
}

export default ClassTitleUpdater;
