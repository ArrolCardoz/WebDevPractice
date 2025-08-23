import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>;");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>;");
});
