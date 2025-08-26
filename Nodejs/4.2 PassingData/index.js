import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    firstName: req.body.fName,
    lastName: req.body.lName,
  };
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  var firstName = req.body.fName;

  const data = {
    firstName: req.body.fName,
    lastName: req.body.lName,
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
