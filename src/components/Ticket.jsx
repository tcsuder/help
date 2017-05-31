import React from "react";

function Ticket(props){
  return (
    <div>
      <h3>{props.location}</h3>
      <h3>{props.name}</h3>
      <h3>{props.timeWaiting}</h3>
    </div>
  );
}

module.exports = Ticket;
