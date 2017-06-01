import React from "react";
import Header from "./Header";
import Ticket from "./Ticket";

function App(props) {
  return (
    <div>
      <Header time={new Date().toLocaleTimeString()}/>
      <Ticket location="3a" name="Thato and Haley" timeWaiting="4 mins"/>
      <Ticket location="4b" name="Sleater and Kinney" timeWaiting="15 mins"/>
    </div>
  );
}

module.exports = App;