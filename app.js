var express = require("express");
var app = express();
var port = 4000; //optional
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true })); // has to be npm install body-parser --save
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/camp", function (req, res) {
  res.render('home')
});

app.get("*", function (req, res) {
  res.send("Not found!");
});

app.listen(port, function () {
  console.log(`now listening on port ${port}`);
});
