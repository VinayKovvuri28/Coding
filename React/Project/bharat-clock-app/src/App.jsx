import React from "react";
import AppName from "./components/AppName";
import Clock from "./components/Clock";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <center className="bharat-clock">
        <AppName />
        <Clock />
      </center>
    </React.Fragment>
  );
}

export default App;
