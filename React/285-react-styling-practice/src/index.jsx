//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom";

const strMorning = "Good Morning";
const strAfternoon = "Good Afternoon";
const strNight = "Good Night";

const colorMorning = "red";
const colorAfternoon = "green";
const colorNight = "blue";

var finalText = "";
const finalStyle = {
  color: "",
};

const time = new Date(2019, 1, 1, 15).getHours();
//test

if (time > 17) {
  finalStyle.color = colorNight;
  finalText = strNight;
} else if (time > 11) {
  finalStyle.color = colorAfternoon;
  finalText = strAfternoon;
} else {
  finalStyle.color = colorMorning;
  finalText = strMorning;
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={finalStyle}>
      {finalText}
    </h1>
  </div>,
  document.getElementById("root"),
);
