var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var Mock = require("mockjs");

var indexRouter = require("./routes/index");
var lineMocker = require("./mock/line");
var mapMocker = require("./mock/map");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.get("/mock/line", function (req, res) {
  res.json(lineMocker(Mock));
});

app.get("/mock/map", function (req, res) {
  res.json(mapMocker(Mock));
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
