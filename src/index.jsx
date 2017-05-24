import React from "react";
import ReactDOM from "react-dom";

function liveTime() {
  ReactDOM.render(
    <div>
      <h1>Help Queue</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>,
    document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);
