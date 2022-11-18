const express = require("express");
const axios = require("axios").default;

const PORT = 4005;

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  await axios.post("http://127.0.0.1:4000/events", event);
  await axios.post("http://127.0.0.1:4001/events", event);
  await axios.post("http://127.0.0.1:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log("Listening on 4005");
});
