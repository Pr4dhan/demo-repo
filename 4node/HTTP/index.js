const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/", function (req, res) {
  res.send("Hello World from post endpoint");
});

app.get("/asd", function (req, res) {
  res.send("Hello from asd endpoint");
});

app.listen(3000);
