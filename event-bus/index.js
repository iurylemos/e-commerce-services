const express = require("express");
const axios = require("axios").default;

const PORT = 4005;

const app = express();
app.use(express.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log("Listening on 4005");
});