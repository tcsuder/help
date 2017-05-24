import React from "react";

function Clock(props){
  return (
    <h2>It is {new Date().toLocaleTimeString()}</h2>
  );
}

module.exports = Clock;
