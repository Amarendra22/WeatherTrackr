import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Amarendra22/WeatherTrackr">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          Amarendra Mohan
        </a>{" "}
        | My GitHub{" "}
        <a target="_blank" href="https://github.com/Amarendra22">
          Link
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
