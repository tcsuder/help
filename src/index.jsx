import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';


function update() {
  ReactDOM.render(
    <App time={new Date().toLocaleTimeString()}/>,
    document.getElementById('react-app-root')
  );
}

setInterval(update, 1000);
