import React from "react";
import reactDOM from "react-dom";

const name = "Arrol Cardoz";
const currentYear = new Date().getFullYear();

reactDOM.render(
  <div>
    <h1>{name}</h1>
    <hr></hr>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
