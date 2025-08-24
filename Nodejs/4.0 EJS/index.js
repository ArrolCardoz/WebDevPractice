import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  const today = new Date(); // Creates a Date object for the current date and time
  const dayOfWeek = today.getDay(); // Gets the day of the week
  let type = "weekday";
  let adv = "it's time to work hard";
  if (dayOfWeek == 0 || dayOfWeek == 6) {
    type = "weekend";
    adv = "it's time to have fun";
  }
  res.render("index.ejs", { dayType: type, advice: adv });
});
