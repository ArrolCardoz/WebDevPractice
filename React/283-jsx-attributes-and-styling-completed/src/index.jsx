import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="fav-food-img" src={img + "?random=1"}></img>
      <img className="fav-food-img" src={img + "?random=2"}></img>
      <img className="fav-food-img" src={img + "?random=3"}></img>
    </div>
  </div>,
  document.getElementById("root"),
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
