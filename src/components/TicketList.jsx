import React from "react";
import Ticket from "./Ticket";

function TicketList(props){

  const TICKETS = [
    {
      names: "Sleater & Kinney",
      location: "4b",
      timeWaiting: "15 mins"
    },
    {
      names: "Travis & Haley",
      location: "3a",
      timeWaiting: "4 mins"
    }
  ];

  return (
    <div>
      {TICKETS.map(function(ticket){
        return <Ticket name={ticket.names} location={ticket.location} timeWaiting={ticket.timeWaiting}/>
      })}
    </div>
  );
}

export default TicketList;
