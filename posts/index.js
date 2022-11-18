const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios").default;

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");

    const { title } = req.body;

    posts[id] = {
      id,
      title,
    };

    await axios.post("http://127.0.0.1:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });

    res.status(201).send(posts[id]);
  } catch (error) {
    console.log("error?", error);
  }
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
