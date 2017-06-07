import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Header from "./Header";
import Ticket from "./Ticket";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Header time={props.time}/>
        <Route path="tickets" component={Ticket}/>
        // <Ticket location="3a" name="Thato and Haley" timeWaiting="4 mins"/>
        // <Ticket location="4b" name="Sleater and Kinney" timeWaiting="15 mins"/>
      </div>
    </BrowserRouter>
  );
}

module.exports = App;
