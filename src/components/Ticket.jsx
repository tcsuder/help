import React from "react";

class Ticket extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.location}</h3>
        <h3>{this.props.name}</h3>
        <h3>{this.props.timeWaiting}</h3>
      </div>
    );
  }
}

module.exports = Ticket;
