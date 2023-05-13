const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  res.json({ msg: "Server A" });
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});