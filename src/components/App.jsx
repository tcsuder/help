import React from "react";
import Clock from "./Clock";
import Ticket from "./Ticket";

function App(props) {
  return (
    <div>
      <h1>Help Queue</h1>
      <Clock/>
      <Ticket location="3a" name="Thato and Haley" timeWaiting="4 mins"/>
    </div>
  );
}

module.exports = App;
