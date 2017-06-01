import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date().toLocaleTimeString()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h2>It is {this.state.time}</h2>
    );
  }
}

module.exports = Clock;
