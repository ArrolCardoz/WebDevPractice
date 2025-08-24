import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("REQ Method:", req.method);
  console.log("REQ  URL:", req.url);
  console.log("REQ Method:", req.url);

  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) => {
  console.log(req.body);

  res.send(
    `<h1>Your band name is: </h1><h2>${req.body.street + req.body.pet}✌️</h2>`
  );
});
