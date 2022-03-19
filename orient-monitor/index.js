const PORT = 3001;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

//app.use("/api/", require("./src/component/HSI"));

// app.get("/", function (req, res) {
//   res.json("hanna");
// });

// app.get("/result", function (req, res) {
//   res.json("result");
// });

app.get("/api", function (req, res) {
  res.json({
    HSIValue: [180],
  });
});

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`Server running on PORT ${url}`);
});
