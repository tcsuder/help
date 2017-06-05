import React from "react";
import Clock from "./Clock";

function Header(props) {
  return (
    <div>
      <h1>Help Queue</h1>
      <Clock time={props.time}/>
    </div>
  );
}

export default Header;
