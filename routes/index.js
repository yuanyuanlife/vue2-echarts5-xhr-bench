var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Vue2 ECharts5 XHR Bench" });
});

module.exports = router;
