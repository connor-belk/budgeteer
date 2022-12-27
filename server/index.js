const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/goodbye", (req, res) => {
  res.send("Goodbye World");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
