const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  res.json({ msg: "Service B" });
});

app.listen(4002, () => {
  console.log("Server listening on port 4002");
});
